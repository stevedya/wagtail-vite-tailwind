# Wagtail + Vite + Tailwind Starter (No HMR)

This is a starter project for integrating **Wagtail**, **Vite**, and **Tailwind CSS** without using Hot Module Replacement (HMR).

## Project Setup

### 1. Navigate to the project directory

```bash
cd wagtail-vite-tailwind-starter
```

### 2. Create and activate a virtual environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

### 3. Install Python dependencies

```bash
pip install -r requirements.txt
```

### 4. Install Node.js dependencies

```bash
npm install
```

## Development Workflow

### Start the Django development server

```bash
python manage.py runserver 0.0.0.0:8000
```

### In a separate terminal, run Vite in watch mode

```bash
npm run dev
```

This will continuously compile frontend assets (CSS and JS) into the Django `static/` directory. It does not use a dev server or HMR.

## Production Build

To compile assets for production, run:

```bash
npm run build
```

This will generate minified and optimized CSS and JS files in the `wagtail_vite_tailwind/static/` directory.

## Notes

* Compiled assets are output to `wagtail_vite_tailwind/static/`
* Use the following in your Django templates:

```django
{% load static %}
<link rel="stylesheet" href="{% static 'css/main.min.css' %}">
<script src="{% static 'js/main.min.js' %}" type="module"></script>
```

* Fingerprinted file versions for cache busting are handled automatically by Django's `ManifestStaticFilesStorage` during production
