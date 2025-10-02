import { useState, useEffect, useRef } from "react";
import { Play, Trash2, Copy, Check, Loader } from "lucide-react";

export default function PythonEditor() {
  const [code, setCode] = useState(`# Coba tulis kode Python di sini
print("Welcome to demtimcoddocs")

# Contoh dengan loop
for i in range(5):
    print(f"Angka: {i}")

# Operasi matematika
result = 10 + 20
print(f"Hasil: {result}")`);

  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [pyodideReady, setPyodideReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [editorReady, setEditorReady] = useState(false);

  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const containerRef = useRef(null);
  const pyodideRef = useRef(null);

  // Load Monaco Editor
  useEffect(() => {
    const loadMonaco = async () => {
      if (window.monaco) {
        initEditor();
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs/loader.min.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.require.config({
          paths: {
            vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs",
          },
        });

        window.require(["vs/editor/editor.main"], () => {
          initEditor();
        });
      };
    };

    const initEditor = () => {
      if (!containerRef.current || editorRef.current) return;

      const editor = window.monaco.editor.create(containerRef.current, {
        value: code,
        language: "python",
        theme: "vs-dark",
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 4,
        insertSpaces: true,
        lineNumbers: "on",
        roundedSelection: false,
        scrollbar: {
          vertical: "visible",
          horizontal: "visible",
        },
      });

      editor.onDidChangeModelContent(() => {
        setCode(editor.getValue());
      });

      editorRef.current = editor;
      monacoRef.current = window.monaco;
      setEditorReady(true);
    };

    loadMonaco();

    return () => {
      if (editorRef.current) {
        editorRef.current.dispose();
      }
    };
  }, []);

  // Load Pyodide
  useEffect(() => {
    const loadPyodide = async () => {
      try {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = async () => {
          pyodideRef.current = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
          });
          setPyodideReady(true);
          setOutput(
            '✅ Python siap digunakan! Klik "Run Code" untuk menjalankan kode.'
          );
        };
      } catch (error) {
        setOutput("❌ Error loading Python: " + error.message);
      }
    };

    loadPyodide();
  }, []);

  const runCode = async () => {
    if (!pyodideReady) {
      setOutput("⏳ Python masih loading, tunggu sebentar...");
      return;
    }

    setIsRunning(true);
    setOutput("⏳ Menjalankan kode...\n");

    try {
      const pyodide = pyodideRef.current;

      // Redirect stdout
      await pyodide.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `);

      // Run user code
      await pyodide.runPythonAsync(code);

      // Get output
      const stdout = await pyodide.runPythonAsync("sys.stdout.getvalue()");
      setOutput(stdout || "✅ Kode berhasil dijalankan (tidak ada output)");
    } catch (error) {
      setOutput("❌ Error:\n" + error.message);
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setOutput("");
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      runCode();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [code, pyodideReady]);

  return (
    <div className="w-full max-w-5xl mx-auto p-4 space-y-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm">main.py</span>
            {!editorReady && (
              <span className="flex items-center gap-2 text-xs text-gray-400">
                <Loader size={14} className="animate-spin" />
                Loading editor...
              </span>
            )}
          </div>
          <button
            onClick={copyCode}
            className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div
          ref={containerRef}
          style={{ height: "400px", width: "100%" }}
          className="bg-gray-900"
        />
      </div>

      <div className="flex gap-3 flex-wrap">
        <button
          onClick={runCode}
          disabled={isRunning || !pyodideReady}
          className="flex items-center gap-2 px-3 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105 disabled:hover:scale-100"
        >
          {isRunning ? (
            <>
              <Loader size={20} className="animate-spin" />
              Running...
            </>
          ) : (
            <>
              <Play size={20} />
              Run Code
            </>
          )}
        </button>
        <button
          onClick={clearOutput}
          className="flex items-center gap-2 px-3 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105"
        >
          <Trash2 size={20} />
          Clear Output
        </button>
        <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700">
          <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono">
            Ctrl
          </kbd>
          <span>+</span>
          <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono">
            Enter
          </kbd>
          <span className="ml-1">to run</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div className="bg-gray-800 text-white px-4 py-2 font-mono text-sm flex items-center justify-between">
          <span>Output Console</span>
          {!pyodideReady && (
            <span className="flex items-center gap-2 text-xs text-yellow-400">
              <Loader size={14} className="animate-spin" />
              Loading Python...
            </span>
          )}
        </div>
        <pre className="p-4 font-mono text-sm bg-gray-50 min-h-[150px] max-h-[400px] overflow-auto whitespace-pre-wrap">
          {output || "💡 Output akan muncul di sini setelah kode dijalankan"}
        </pre>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h3 className="font-bold text-blue-900 mb-2">💡 Tips:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>
            • Gunakan <code className="bg-blue-100 px-1 rounded">print()</code>{" "}
            untuk menampilkan output
          </li>
          <li>
            • Tekan{" "}
            <kbd className="bg-blue-100 px-2 py-0.5 rounded text-xs font-mono">
              Ctrl+Enter
            </kbd>{" "}
            untuk run code dengan cepat
          </li>
          <li>• Editor menggunakan Monaco (sama seperti VS Code)</li>
          <li>• Python berjalan di browser menggunakan Pyodide (WASM)</li>
          <li>• Support library standar Python dan beberapa library populer</li>
          <li>
            • Kode berjalan di browser Anda, tidak ada data yang dikirim ke
            server
          </li>
        </ul>
      </div>
    </div>
  );
}
