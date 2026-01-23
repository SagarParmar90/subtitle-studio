import React, { useState } from 'react';
import { Key, ExternalLink, X, CheckCircle } from 'lucide-react';

interface ApiKeyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (key: string) => void;
    error?: string;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onSave, error }) => {
    const [apiKey, setApiKey] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (apiKey.trim()) {
            onSave(apiKey.trim());
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-md bg-slate-900/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                    <div className="flex items-center gap-2 text-neon-purple">
                        <Key className="w-5 h-5" />
                        <h2 className="text-lg font-semibold tracking-wide text-white">API Quota Exceeded</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                    <p className="text-slate-300 text-sm leading-relaxed">
                        The free tier quota for the default API key has been exhausted.
                        To continue, please enter your own
                        <span className="text-neon-cyan font-mono mx-1">gemini-3-flash-preview</span>
                        API key.
                    </p>

                    {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                                Your Gemini API Key
                            </label>
                            <input
                                type="password"
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                                placeholder="AIzaSy..."
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/50 transition-all font-mono text-sm"
                                autoFocus
                            />
                        </div>

                        <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500">Don't have a key?</span>
                            <a
                                href="https://aistudio.google.com/app/apikey"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-neon-blue hover:text-neon-cyan transition-colors"
                            >
                                Get a key form Google AI Studio
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>

                        <button
                            type="submit"
                            disabled={!apiKey.trim()}
                            className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue p-[1px] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <div className="relative bg-slate-900 rounded-[11px] px-4 py-3 transition-colors group-hover:bg-slate-800">
                                <div className="flex items-center justify-center gap-2 text-white font-medium">
                                    <span>Save & Retry</span>
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
