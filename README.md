# Kanban Board

A modern, interactive Jira-style Kanban board application built with React and TypeScript, featuring drag-and-drop functionality powered by dnd-kit.

## Overview

This project is a desktop-optimized task management application that enables users to organize their workflow using a Kanban methodology. Users can create multiple columns (representing different workflow stages), add tasks to each column, and intuitively manage them through drag-and-drop interactions. The application provides a clean, dark-themed UI with smooth animations and real-time updates.

## Features

- **Drag-and-Drop Functionality**: Seamlessly drag tasks between columns and reorder both tasks and columns
- **Dynamic Column Management**: Create new columns, edit column titles, and delete entire columns with associated tasks
- **Task Management**: Add tasks to columns, edit task content inline, and remove tasks individually
- **Real-Time State Management**: Instant updates to UI as you interact with the board
- **Smooth Animations**: Transitions and visual feedback during drag operations
- **Responsive Styling**: Modern dark theme with Tailwind CSS for professional appearance
- **Type-Safe**: Full TypeScript support for better code reliability and developer experience

## Tech Stack

| Technology       | Version        | Purpose                            |
| ---------------- | -------------- | ---------------------------------- |
| **React**        | 19.2.0         | UI library and component framework |
| **TypeScript**   | 5.9.3          | Type-safe JavaScript               |
| **Tailwind CSS** | 4.2.0          | Utility-first CSS framework        |
| **@dnd-kit**     | 6.3.1 & 10.0.0 | Drag-and-drop functionality        |
| **Vite**         | 7.3.1          | Build tool and development server  |
| **ESLint**       | 9.39.1         | Code quality and consistency       |

## Installation Steps

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd kanban
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**

   ```bash
   npm run preview
   ```

6. **Run linter**
   ```bash
   npm run lint
   ```

## Usage Instructions

### Getting Started

1. Open the application in your browser
2. The board starts empty - click the **"+"** button to create your first column
3. Name your columns to represent workflow stages (e.g., "To Do", "In Progress", "Done")

### Managing Columns

- **Create Column**: Click the **"+"** button at the top-right
- **Edit Column Title**: Click on the column header to enter edit mode, type your new title, and press Enter
- **Delete Column**: Click the trash icon on the column header (also removes all tasks in that column)
- **Reorder Columns**: Drag and drop column headers to rearrange workflow stages

### Managing Tasks

- **Create Task**: Click the **"+"** button within a column to add a new task
- **Edit Task**: Click on a task card to enter edit mode, modify content, and press Enter
- **Delete Task**: Click the trash icon on a task card to remove it
- **Move Task**: Drag a task card to move it between columns
- **Reorder Tasks**: Drag tasks within the same column to change their order

## Project Structure

```
kanban/
├── src/
│   ├── components/
│   │   ├── kanbonBoard.tsx          # Main board component with state management
│   │   ├── ColumnContainer.tsx      # Individual column component
│   │   └── TaskCard.tsx              # Individual task card component
│   ├── icons/
│   │   ├── PlusIcon.tsx              # Plus icon for add buttons
│   │   └── TrashIcon.tsx             # Trash icon for delete buttons
│   ├── App.tsx                       # Root application component
│   ├── types.tsx                     # TypeScript type definitions
│   ├── main.tsx                      # Application entry point
│   ├── App.css                       # Application styles
│   └── index.css                     # Global styles
├── public/                           # Static assets
├── package.json                      # Project dependencies and scripts
├── vite.config.ts                    # Vite configuration
├── tsconfig.json                     # TypeScript configuration
├── eslint.config.js                  # ESLint configuration
└── README.md                         # This file
```

## Key Functionalities

### Drag-and-Drop System

The application uses `@dnd-kit` library which provides:

- **PointerSensor Activation**: Drag activation with 3-pixel movement threshold to prevent accidental triggers
- **Column Dragging**: Reorder workflow columns by dragging column headers
- **Task Dragging**: Move tasks between columns or reorder within columns
- **Visual Feedback**: Opacity and border changes during drag operations
- **DragOverlay**: Visual indicator showing what's being dragged

### State Management

- **Columns**: Stored in state with unique IDs and titles
- **Tasks**: Stored in state with ID, content, and associated column ID
- **Active Drag Items**: Tracks which column or task is currently being dragged for visual feedback

### Inline Editing

- **Column Titles**: Click to enter edit mode, press Enter to save, Escape to cancel
- **Task Content**: Click to enter edit mode with textarea for multi-line support
- **Edit Mode Toggle**: Automatically prevents dragging while in edit mode

## Desktop-Only Disclaimer

⚠️ **Note**: This application is optimized for desktop use. While the code functions on mobile devices, the interface and drag-and-drop interactions are best experienced on a desktop or tablet with a mouse or trackpad. Touch interactions may be limited for optimal user experience.

