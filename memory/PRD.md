# Subtitle Studio - iOS 26 Liquid Glass Edition

## Original Problem Statement
Redesign subtitle webapp with iOS 26 liquid glass elements that interact with cursor movement.

## User Choices
- **Features**: Audio upload, manual subtitle editor, no translation
- **Cursor Effects**: All (3D tilt, glow follow, parallax)
- **Background**: Gradient mesh (iOS 26 style pink/blue/purple)
- **AI Integration**: Gemini for transcription with word-level SRT

## Architecture
- **Frontend**: Vite + React + TypeScript + TailwindCSS v4
- **Backend**: FastAPI (minimal health endpoint)
- **AI**: Gemini 2.0 Flash via Emergent LLM Key
- **Styling**: Custom iOS 26 Liquid Glass CSS system

## Core Requirements (Static)
1. iOS 26 Liquid Glass UI design
2. Interactive cursor effects on glass panels
3. Audio transcription with word-level timestamps
4. SRT file parsing and export
5. Manual subtitle editing

## What's Been Implemented (March 2026)
- [x] iOS 26 gradient mesh animated background
- [x] Liquid glass panels with 3D tilt effect following cursor
- [x] Glow/light reflection follows cursor on glass surfaces
- [x] Parallax movement of background orbs
- [x] Glass navigation header with logo
- [x] File upload with drag-drop and glass effects
- [x] Feature cards with glass panels and hover effects
- [x] Subtitle editor with word card grid
- [x] Timeline player with glass controls
- [x] Export panel with SRT settings
- [x] AI Actions panel (Romanize, Find & Replace, AI Enhance)
- [x] Gemini integration using Emergent LLM Key

## Key Files
- `/app/frontend/src/index.css` - iOS 26 Liquid Glass CSS system
- `/app/frontend/src/hooks/useCursorPosition.ts` - Cursor tracking hook
- `/app/frontend/src/components/GlassPanel.tsx` - Reusable glass component
- `/app/frontend/src/App.tsx` - Main app with parallax effects
- `/app/frontend/src/services/geminiService.ts` - AI transcription

## Backlog / Future Features
- P0: Audio file transcription testing with real audio
- P1: Audio playback sync with word highlighting
- P2: Find & Replace functionality
- P3: AI Enhance feature implementation
- P3: Multiple export format optimizations

## Next Tasks
1. Test audio transcription with demo MP3 file
2. Implement audio playback with word highlighting sync
3. Add Find & Replace modal functionality
