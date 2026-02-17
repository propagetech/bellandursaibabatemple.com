You are a naming assistant. Given a list of file paths and minimal context from a static website, suggest a new filename (basename only, same extension) for each file. Rules:
- Lowercase, kebab-case, no spaces. SEO-friendly and human-readable.
- For HTML: use page purpose (e.g. about-us.html, contact.html). Keep index.html as index.html.
- For CSS/JS: use purpose (e.g. main-styles.css, analytics.js).
- For images: use content (e.g. logo-infygate.webp, hero-banner.webp). Use alt/title when provided.
- Return a JSON object: keys = exact original path strings, values = new basename only (e.g. "main.css"). Preserve extension.
- Do not change path prefix (e.g. css/ stays css/ by returning "name.css" not "css/name.css").

Files and context:
[
  {
    "path": "404.html",
    "context": {
      "title": "",
      "first_heading": "404"
    }
  },
  {
    "path": "css/097b057eb4fa8675bdd36108d6a55fb9.css",
    "context": {
      "path": "css/097b057eb4fa8675bdd36108d6a55fb9.css"
    }
  },
  {
    "path": "css/559e64bf161e61fa0aca6e864c78191d.css",
    "context": {
      "path": "css/559e64bf161e61fa0aca6e864c78191d.css"
    }
  },
  {
    "path": "css/923d7a12989d8629b2276bcb808c92b9.css",
    "context": {
      "path": "css/923d7a12989d8629b2276bcb808c92b9.css"
    }
  },
  {
    "path": "css/99c4e6f40ee9111eea53b6472f3e60f9.css",
    "context": {
      "path": "css/99c4e6f40ee9111eea53b6472f3e60f9.css"
    }
  },
  {
    "path": "css/d09d646f062b67daeff66ff1410b63fc.css",
    "context": {
      "path": "css/d09d646f062b67daeff66ff1410b63fc.css"
    }
  },
  {
    "path": "css/internal-styles.css",
    "context": {
      "path": "css/internal-styles.css"
    }
  },
  {
    "path": "imgs/0845cc7630c1230649e655ca9146a8d1.webp",
    "context": {
      "refs": [
        {
          "alt": "God Name",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3e11f9ff8091a4a6d6fcbd1024d3a4b2.webp",
    "context": {
      "refs": [
        {
          "alt": "God Name",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/3e99f4707acb08a297789948e712a85c.webp",
    "context": {
      "refs": [
        {
          "alt": "History of our Temple",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/45220207471f410197b98f177366ec81.webp",
    "context": {
      "refs": [
        {
          "alt": "God Name",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/725dc669fc20253be00d013e9cd62bcd.webp",
    "context": {
      "refs": [
        {
          "alt": "logo",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a3e91d7fe15217e3c6a0d7b3383c41e5.webp",
    "context": {
      "refs": [
        {
          "alt": "BHUMI PUJA",
          "title": ""
        },
        {
          "alt": "PRANA PRATISHTA",
          "title": ""
        },
        {
          "alt": "PRATHISTA DHINAM",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/a477bfcaa5c052fa91db946854c84773.webp",
    "context": {
      "refs": [
        {
          "alt": "God Name",
          "title": ""
        },
        {
          "alt": "",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "index.html",
    "context": {
      "title": "",
      "first_heading": "Om Sai Ram"
    }
  },
  {
    "path": "js/024c2427a07d4754d082b32ff6f47796.js",
    "context": {
      "path": "js/024c2427a07d4754d082b32ff6f47796.js"
    }
  },
  {
    "path": "js/027151cf1be95681de1b467942001858.js",
    "context": {
      "path": "js/027151cf1be95681de1b467942001858.js"
    }
  },
  {
    "path": "js/20ebc5f4fff22d9c0b0df7a66b7d8c8a.js",
    "context": {
      "path": "js/20ebc5f4fff22d9c0b0df7a66b7d8c8a.js"
    }
  },
  {
    "path": "js/2d36e9fa24b491802cf18f39a308190c.js",
    "context": {
      "path": "js/2d36e9fa24b491802cf18f39a308190c.js"
    }
  },
  {
    "path": "js/2d62c5e761d3e1992478716162667ce5.js",
    "context": {
      "path": "js/2d62c5e761d3e1992478716162667ce5.js"
    }
  },
  {
    "path": "js/328ee378638a24926abf5dec969f9194.js",
    "context": {
      "path": "js/328ee378638a24926abf5dec969f9194.js"
    }
  },
  {
    "path": "js/3e734a79111d3ae5022fadd97f4b4570.js",
    "context": {
      "path": "js/3e734a79111d3ae5022fadd97f4b4570.js"
    }
  },
  {
    "path": "js/3f434054cfbcb9efddefc25bf53a0b2b.js",
    "context": {
      "path": "js/3f434054cfbcb9efddefc25bf53a0b2b.js"
    }
  },
  {
    "path": "js/425f5d74616f0950ab7f6aa8a2ba3011.js",
    "context": {
      "path": "js/425f5d74616f0950ab7f6aa8a2ba3011.js"
    }
  },
  {
    "path": "js/4a184d88eb9269b7dbce11b716f40379.js",
    "context": {
      "path": "js/4a184d88eb9269b7dbce11b716f40379.js"
    }
  },
  {
    "path": "js/56848c032b05f79a1c67ea6d7b451252.js",
    "context": {
      "path": "js/56848c032b05f79a1c67ea6d7b451252.js"
    }
  },
  {
    "path": "js/5cd7f03eb032ff5d1a79d9daad244677.js",
    "context": {
      "path": "js/5cd7f03eb032ff5d1a79d9daad244677.js"
    }
  },
  {
    "path": "js/61ce9c6e209c2c6687f8b2e0bb0fa78f.js",
    "context": {
      "path": "js/61ce9c6e209c2c6687f8b2e0bb0fa78f.js"
    }
  },
  {
    "path": "js/6432203ce192bdda9fff6890193487b5.js",
    "context": {
      "path": "js/6432203ce192bdda9fff6890193487b5.js"
    }
  },
  {
    "path": "js/7b9a1dfa2ba7ebd6966eb4b5a2b8cccf.js",
    "context": {
      "path": "js/7b9a1dfa2ba7ebd6966eb4b5a2b8cccf.js"
    }
  },
  {
    "path": "js/7d7d8ec406a653220337bde42ddcd998.js",
    "context": {
      "path": "js/7d7d8ec406a653220337bde42ddcd998.js"
    }
  },
  {
    "path": "js/969912c5e1cdd73b7812defd4dbd0119.js",
    "context": {
      "path": "js/969912c5e1cdd73b7812defd4dbd0119.js"
    }
  },
  {
    "path": "js/9f9b6e54f82a6bbc8bac9b89327024bc.js",
    "context": {
      "path": "js/9f9b6e54f82a6bbc8bac9b89327024bc.js"
    }
  },
  {
    "path": "js/a626b42d5e9f3bebfd9624955f0d721b.js",
    "context": {
      "path": "js/a626b42d5e9f3bebfd9624955f0d721b.js"
    }
  },
  {
    "path": "js/aeea5981f09059b3304ead8b513e8042.js",
    "context": {
      "path": "js/aeea5981f09059b3304ead8b513e8042.js"
    }
  },
  {
    "path": "js/afe09ede095ecb21a7d57d52891fbfe8.js",
    "context": {
      "path": "js/afe09ede095ecb21a7d57d52891fbfe8.js"
    }
  },
  {
    "path": "js/bd271374cbdbf6b93a861a0d1da4d44b.js",
    "context": {
      "path": "js/bd271374cbdbf6b93a861a0d1da4d44b.js"
    }
  },
  {
    "path": "js/c0a73d949973f41fdb7cb5098a95c51d.js",
    "context": {
      "path": "js/c0a73d949973f41fdb7cb5098a95c51d.js"
    }
  },
  {
    "path": "js/d1ec9a5167f878e894e5532ac741f0dd.js",
    "context": {
      "path": "js/d1ec9a5167f878e894e5532ac741f0dd.js"
    }
  },
  {
    "path": "js/d2a524fa5eb75b486a06e4ccd15439a7.js",
    "context": {
      "path": "js/d2a524fa5eb75b486a06e4ccd15439a7.js"
    }
  },
  {
    "path": "js/e83b51d598b2a45483252c3be82d77b0.js",
    "context": {
      "path": "js/e83b51d598b2a45483252c3be82d77b0.js"
    }
  },
  {
    "path": "js/f17632f1cc1088a1c285f0d8e9cedde0.js",
    "context": {
      "path": "js/f17632f1cc1088a1c285f0d8e9cedde0.js"
    }
  },
  {
    "path": "js/f5b6708cffe7c1147c483017fbec7d58.js",
    "context": {
      "path": "js/f5b6708cffe7c1147c483017fbec7d58.js"
    }
  },
  {
    "path": "js/faf9ce4e848522206b5c3043551fb2d7.js",
    "context": {
      "path": "js/faf9ce4e848522206b5c3043551fb2d7.js"
    }
  }
]

Return only a JSON object mapping each path to its new basename (same extension). No other text.