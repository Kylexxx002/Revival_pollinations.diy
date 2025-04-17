import React, { useState, useCallback } from 'react';
import { Wand2, Upload, Link as LinkIcon, Github } from 'lucide-react';

const Create = () => {
  const [prompt, setPrompt] = useState('');
  const [importMethod, setImportMethod] = useState<'prompt' | 'file' | 'url' | 'github'>('prompt');
  const [url, setUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && (selectedFile.type === 'application/zip' || selectedFile.name.endsWith('.zip'))) {
      setFile(selectedFile);
    } else {
      alert('Please select a ZIP file');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      switch (importMethod) {
        case 'prompt':
          console.log('Creating with prompt:', prompt);
          break;
        case 'file':
          if (file) {
            console.log('Uploading file:', file.name);
            // TODO: Implement file upload logic
          }
          break;
        case 'url':
          if (url) {
            console.log('Importing from URL:', url);
            // TODO: Implement URL import logic
          }
          break;
        case 'github':
          if (githubUrl) {
            console.log('Cloning from GitHub:', githubUrl);
            // TODO: Implement GitHub clone logic
          }
          break;
      }
    } catch (error) {
      console.error('Error during import:', error);
      alert('An error occurred during import. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Create Something Amazing</h1>
      
      <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20">
        <div className="mb-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setImportMethod('prompt')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                importMethod === 'prompt'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Wand2 className="h-5 w-5" />
              <span>Prompt</span>
            </button>
            <button
              onClick={() => setImportMethod('file')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                importMethod === 'file'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Upload className="h-5 w-5" />
              <span>Upload ZIP</span>
            </button>
            <button
              onClick={() => setImportMethod('url')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                importMethod === 'url'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <LinkIcon className="h-5 w-5" />
              <span>URL</span>
            </button>
            <button
              onClick={() => setImportMethod('github')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                importMethod === 'github'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {importMethod === 'prompt' && (
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">
                Enter your prompt
              </label>
              <textarea
                id="prompt"
                rows={4}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Describe what you want to create..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
          )}

          {importMethod === 'file' && (
            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                Upload ZIP file
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="file-upload"
                  className="w-full flex flex-col items-center justify-center px-4 py-6 bg-gray-900 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-400">
                    {file ? file.name : 'Drop your ZIP file here or click to browse'}
                  </span>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".zip"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          )}

          {importMethod === 'url' && (
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-2">
                Enter URL
              </label>
              <input
                type="url"
                id="url"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="https://example.com/project.zip"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          )}

          {importMethod === 'github' && (
            <div>
              <label htmlFor="github" className="block text-sm font-medium text-gray-300 mb-2">
                GitHub Repository URL
              </label>
              <input
                type="url"
                id="github"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="https://github.com/username/repository"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
              />
            </div>
          )}

          <button
            type="submit"
            className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Wand2 className="h-5 w-5" />
            <span>Generate</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;