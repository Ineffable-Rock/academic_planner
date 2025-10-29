roadmaps = {
    "Web Development": [
        {
            "phase": "Phase 1: Foundations",
            "topics": [
                {
                    "name": "HTML5 & Semantics",
                    "description": "Build accessible, structured markup using modern HTML.",
                    "subtopics": [
                        "Document structure (doctype, head, body)",
                        "Semantic elements: header, nav, main, article, section, footer, aside",
                        "Forms: inputs, validation, file upload, accessibility attributes",
                        "Media: <img>, <picture>, <video>, responsive images (srcset)",
                        "Microdata & ARIA roles for accessibility"
                    ],
                    "tools": ["Browser DevTools", "Lighthouse", "aXe"],
                    "recommended_projects": ["Personal portfolio site (semantic markup + accessibility)"]
                },
                {
                    "name": "CSS3 Fundamentals",
                    "description": "Styling, layout and responsive techniques.",
                    "subtopics": [
                        "Selectors, specificity, cascade",
                        "Box model, margin collapsing, box-sizing",
                        "Positioning (static, relative, absolute, sticky, fixed)",
                        "Typography, webfonts (Google Fonts), responsive units (rem, em, vw)",
                        "Transitions, transforms, basic animations"
                    ],
                    "tools": ["PostCSS", "Autoprefixer", "Google Fonts"],
                    "recommended_projects": ["Landing page with responsive typography & animations"]
                },
                {
                    "name": "Layout Systems",
                    "description": "Modern layout techniques for robust responsive UIs.",
                    "subtopics": [
                        "Flexbox: axes, alignment, wrapping, ordering",
                        "Grid: tracks, areas, implicit/explicit grid, alignment",
                        "Responsive design patterns: mobile-first, breakpoints, container queries (where available)",
                        "CSS methodologies: BEM, OOCSS, utility-first concepts"
                    ],
                    "tools": ["Tailwind (optional)", "CSS Grid playground"],
                    "recommended_projects": ["Responsive dashboard layout using Grid + Flexbox"]
                },
                {
                    "name": "JavaScript Core",
                    "description": "ES6+ JS fundamentals and browser APIs.",
                    "subtopics": [
                        "Data types, scope, hoisting, closures",
                        "Functions, arrow functions, higher-order functions",
                        "Prototypes, classes, modules (ESM)",
                        "Asynchronous JS: callbacks, promises, async/await",
                        "Fetch API, XHR, working with JSON",
                        "Error handling, debugging patterns"
                    ],
                    "tools": ["Node.js (runtime for tooling)", "Chrome DevTools Debugger"],
                    "recommended_projects": ["Interactive to-do app (localStorage + async features)"]
                },
                {
                    "name": "Version Control & Collaboration",
                    "description": "Use Git/GitHub for source control and team workflows.",
                    "subtopics": [
                        "git basics: init, clone, add, commit, push, pull",
                        "branching strategies: feature branches, git-flow basics",
                        "pull requests, code reviews, resolving merge conflicts",
                        "semantic commit messages, tags and releases",
                        "CI basics: running linters/tests on push"
                    ],
                    "tools": ["Git", "GitHub/GitLab/Bitbucket", "Prettier", "ESLint"],
                    "recommended_projects": ["Open-source contribution (small fix + PR)"]
                }
            ]
        },
        {
            "phase": "Phase 2: Frontend Ecosystem & Tooling",
            "topics": [
                {
                    "name": "Modern JavaScript (ESNext) & Tooling",
                    "subtopics": [
                        "Transpilation & bundling: Babel, Webpack, Vite, Rollup",
                        "Module formats, code-splitting, tree-shaking",
                        "TypeScript basics and gradual typing",
                        "Linting & formatting: ESLint + Prettier",
                        "Testing basics: Jest, Testing Library (Jest + RTL)"
                    ],
                    "tools": ["Vite", "Webpack", "Babel", "TypeScript", "Jest"],
                    "recommended_projects": ["Set up a modern dev environment for a JS app (TypeScript + Vite)"]
                },
                {
                    "name": "React (or chosen framework)",
                    "description": "Component-driven UI development and state management.",
                    "subtopics": [
                        "JSX, components, props, composition patterns",
                        "State & lifecycle (class vs hooks), useState, useEffect",
                        "Context API for simple state, lifting state up",
                        "Routing: React Router (nested routes, lazy loading)",
                        "Advanced hooks: useReducer, useCallback, useMemo, custom hooks"
                    ],
                    "tools": ["React", "React Router", "React DevTools"],
                    "recommended_projects": ["SPA with authenticated routes and nested layouts"]
                },
                {
                    "name": "State Management",
                    "subtopics": [
                        "Local vs global state",
                        "Redux: actions, reducers, middleware (thunk/saga)",
                        "Alternatives: Zustand, MobX, Recoil",
                        "Normalizing state, selectors, reselect"
                    ],
                    "tools": ["Redux Toolkit", "Zustand", "React Query for server state"],
                    "recommended_projects": ["CRUD app with complex state across components using Redux Toolkit"]
                },
                {
                    "name": "Styling Strategies",
                    "subtopics": [
                        "CSS-in-JS solutions: styled-components, emotion",
                        "Utility-first frameworks: Tailwind CSS",
                        "Component libraries: Material UI, Chakra UI",
                        "Responsive utilities, theming, dark mode"
                    ],
                    "tools": ["Tailwind", "styled-components", "Material UI"],
                    "recommended_projects": ["Design a small component library and theme it"]
                },
                {
                    "name": "Accessibility & Internationalization",
                    "subtopics": [
                        "WCAG fundamentals, keyboard navigation, focus management",
                        "ARIA roles and attributes, semantic HTML",
                        "i18n strategies, locale formatting, rtl support"
                    ],
                    "tools": ["react-aria", "react-intl", "Lighthouse accessibility audits"],
                    "recommended_projects": ["Make an existing UI fully accessible and localized"]
                }
            ]
        },
        {
            "phase": "Phase 3: Backend & Full-Stack",
            "topics": [
                {
                    "name": "API Design & HTTP",
                    "subtopics": [
                        "RESTful principles, resource modeling, status codes",
                        "Pagination, filtering, sorting patterns",
                        "Rate limiting, caching headers, idempotency",
                        "Designing REST vs GraphQL: when to use each"
                    ],
                    "tools": ["Postman", "Insomnia"],
                    "recommended_projects": ["Design and document a public REST API with OpenAPI/Swagger"]
                },
                {
                    "name": "Node.js & Express (or backend stack)",
                    "subtopics": [
                        "Express fundamentals: routing, middleware, error handling",
                        "Authentication: sessions, JWT, OAuth flows",
                        "File uploads, streaming, background jobs",
                        "Security headers, input validation, sanitization"
                    ],
                    "tools": ["Express", "Passport.js", "Helmet", "bcrypt"],
                    "recommended_projects": ["Build an API for a multi-user blog with auth & roles"]
                },
                {
                    "name": "Databases & Persistence",
                    "subtopics": [
                        "Relational DBs basics: SQL, normalization, indexing",
                        "NoSQL concepts: document vs key-value (MongoDB)",
                        "ORM/ODM: Prisma, Sequelize, Mongoose",
                        "Transactions, ACID, migrations, connection pooling"
                    ],
                    "tools": ["PostgreSQL", "MongoDB", "Prisma"],
                    "recommended_projects": ["Design a normalized schema and implement CRUD with migrations"]
                },
                {
                    "name": "Testing, Logging & Monitoring",
                    "subtopics": [
                        "Unit tests, integration tests, end-to-end (Cypress)",
                        "Structured logging, request tracing, observability",
                        "Sentry or other error tracking, health checks"
                    ],
                    "tools": ["Jest", "Supertest", "Cypress", "Sentry"],
                    "recommended_projects": ["Add full test coverage and monitoring to an API service"]
                },
                {
                    "name": "Deployment & Scaling",
                    "subtopics": [
                        "Containerization: Docker basics, multi-stage builds",
                        "Orchestration: Kubernetes fundamentals (pods, services, ingress)",
                        "CDNs, caching strategies, static hosting (Vercel/Netlify)",
                        "Load balancing, auto-scaling, blue/green deploys"
                    ],
                    "tools": ["Docker", "Kubernetes", "Nginx", "Vercel"],
                    "recommended_projects": ["Containerize and deploy a full-stack app with CI/CD"]
                }
            ]
        },
        {
            "phase": "Phase 4: Advanced Topics & Career",
            "topics": [
                {
                    "name": "Performance Optimization",
                    "subtopics": [
                        "Critical rendering path, resource hints (preload, prefetch)",
                        "Image optimization, lazy loading, code splitting",
                        "Bundle analysis, long-term caching, service workers (PWA)",
                        "Time to Interactive (TTI), First Contentful Paint (FCP)"
                    ],
                    "tools": ["Lighthouse", "Webpack Bundle Analyzer", "Workbox"],
                    "recommended_projects": ["Convert an app to a PWA with offline-first behavior"]
                },
                {
                    "name": "Security Best Practices",
                    "subtopics": [
                        "OWASP Top 10 for web apps (XSS, CSRF, Injection)",
                        "Secure storage of credentials, secrets management",
                        "HTTPS, HSTS, Content Security Policy",
                        "Pen-testing basics and remediation"
                    ],
                    "tools": ["Burp Suite", "OWASP ZAP", "Vault"],
                    "recommended_projects": ["Perform a security audit and fix vulnerabilities in a demo app"]
                },
                {
                    "name": "Soft Skills & Job Prep",
                    "subtopics": [
                        "System design basics for frontend & full-stack",
                        "Architecture discussions, API contracts, code reviews",
                        "Portfolio, GitHub presence, technical blogging",
                        "Interview practice: algorithms, design, behavioral"
                    ],
                    "recommended_projects": ["Prepare 3 portfolio projects with writeups and architecture docs"]
                }
            ]
        }
    ],

    "Data Science": [
        {
            "phase": "Phase 1: Foundations & Tools",
            "topics": [
                {
                    "name": "Python for Data Science",
                    "subtopics": [
                        "Core Python: data structures, functions, OOP basics",
                        "NumPy: arrays, broadcasting, vectorized ops",
                        "Pandas: Series/DataFrame, indexing, groupby, joins, pivot",
                        "Data I/O: CSV, Parquet, SQL, APIs"
                    ],
                    "tools": ["Python", "NumPy", "Pandas", "Jupyter Notebook"],
                    "recommended_projects": ["EDA on open dataset; prepare reproducible notebook"]
                },
                {
                    "name": "Statistics & Math",
                    "subtopics": [
                        "Descriptive stats: mean, median, variance, percentiles",
                        "Probability distributions, Bayes theorem",
                        "Hypothesis testing, p-values, confidence intervals",
                        "Linear algebra fundamentals: vectors, matrices, eigenvalues",
                        "Calculus basics for optimization: derivatives, gradients"
                    ],
                    "recommended_projects": ["Statistical analysis report on A/B test dataset"]
                },
                {
                    "name": "Data Cleaning & Feature Engineering",
                    "subtopics": [
                        "Handling missing data, outliers, and duplicates",
                        "Scaling/normalization, binning, encoding categorical variables",
                        "Feature creation techniques, feature selection",
                        "Pipelines for repeatable preprocessing (scikit-learn pipelines)"
                    ],
                    "tools": ["scikit-learn", "pandas-profiling", "Featuretools"],
                    "recommended_projects": ["Build a preprocessing pipeline for an ML model"]
                }
            ]
        },
        {
            "phase": "Phase 2: Classical Machine Learning",
            "topics": [
                {
                    "name": "Supervised Learning",
                    "subtopics": [
                        "Linear regression (OLS), regularization (Ridge/Lasso)",
                        "Classification: logistic regression, decision trees, SVM",
                        "Ensemble methods: Random Forests, Gradient Boosting (XGBoost/LightGBM)",
                        "Evaluation metrics: RMSE, MAE, accuracy, precision/recall, F1, ROC-AUC"
                    ],
                    "tools": ["scikit-learn", "XGBoost", "LightGBM"],
                    "recommended_projects": ["Predict housing prices with feature engineering and model tuning"]
                },
                {
                    "name": "Unsupervised Learning & Dimensionality Reduction",
                    "subtopics": [
                        "Clustering: KMeans, DBSCAN, hierarchical clustering",
                        "PCA, t-SNE, UMAP for visualization and compression",
                        "Anomaly detection techniques"
                    ],
                    "tools": ["scikit-learn", "umap-learn"],
                    "recommended_projects": ["Customer segmentation project using clustering + visualization"]
                },
                {
                    "name": "Model Validation & Pipelines",
                    "subtopics": [
                        "Cross-validation strategies, time-series CV",
                        "Hyperparameter tuning: grid search, randomized search, Bayesian optimization",
                        "Model selection, bias-variance tradeoff, learning curves"
                    ],
                    "tools": ["scikit-learn", "Optuna", "MLflow (experiment tracking)"],
                    "recommended_projects": ["End-to-end ML pipeline with CV and hyperparameter search"]
                }
            ]
        },
        {
            "phase": "Phase 3: Deep Learning & Advanced Topics",
            "topics": [
                {
                    "name": "Neural Networks & Deep Learning",
                    "subtopics": [
                        "Perceptron -> MLPs, activation functions (ReLU, sigmoid)",
                        "Backpropagation, optimization (SGD, Adam), learning rates",
                        "Regularization: dropout, batch norm, early stopping"
                    ],
                    "tools": ["PyTorch", "TensorFlow", "Keras"],
                    "recommended_projects": ["Build and train an image classifier using transfer learning"]
                },
                {
                    "name": "Computer Vision",
                    "subtopics": [
                        "CNN architectures: AlexNet, VGG, ResNet",
                        "Object detection: Faster R-CNN, YOLO series, SSD",
                        "Image segmentation: U-Net, Mask R-CNN",
                        "Data augmentation, image preprocessing"
                    ],
                    "tools": ["OpenCV", "Detectron2", "Albumentations"],
                    "recommended_projects": ["Object detection pipeline for a custom dataset"]
                },
                {
                    "name": "Natural Language Processing",
                    "subtopics": [
                        "Text preprocessing: tokenization, stemming, lemmatization",
                        "Word embeddings: Word2Vec, GloVe, fastText",
                        "Transformers: attention mechanism, BERT, GPT architectures",
                        "Sequence models: RNNs, LSTMs, seq2seq"
                    ],
                    "tools": ["Hugging Face Transformers", "spaCy", "NLTK"],
                    "recommended_projects": ["Fine-tune a transformer for sentiment analysis or QA"]
                },
                {
                    "name": "Model Deployment & MLOps",
                    "subtopics": [
                        "Model serialization, versioning, and packaging",
                        "Serving: FastAPI/Flask, TorchServe, TensorFlow Serving",
                        "Containerization of models with Docker, CI/CD for ML",
                        "Monitoring models in production, data drift detection"
                    ],
                    "tools": ["Docker", "FastAPI", "Kubernetes", "MLflow", "Seldon Core"],
                    "recommended_projects": ["Deploy a trained model with an API and monitoring"]
                }
            ]
        },
        {
            "phase": "Phase 4: Domain Specialization & Career",
            "topics": [
                {
                    "name": "Time Series & Forecasting",
                    "subtopics": [
                        "ARIMA, SARIMA, state-space models",
                        "Feature engineering for sequences, windowing, seasonality",
                        "LSTM/GRU based methods and Transformer approaches for sequences"
                    ],
                    "tools": ["statsmodels", "Prophet"],
                    "recommended_projects": ["Forecast sales or demand using classical and DL methods"]
                },
                {
                    "name": "Big Data & Scalable ML",
                    "subtopics": [
                        "Distributed data processing: Spark, Dask",
                        "Feature stores, streaming features, real-time predictions",
                        "Large-scale training: data parallelism, model parallelism"
                    ],
                    "tools": ["Apache Spark", "Dask", "Kafka"],
                    "recommended_projects": ["Build a simple streaming inference pipeline"]
                },
                {
                    "name": "Career & Soft Skills",
                    "subtopics": [
                        "Communicating results: dashboards, storytelling, reproducible research",
                        "Resume projects, Kaggle participation, GitHub portfolio",
                        "Interview preparation: ML fundamentals, system design for ML"
                    ],
                    "recommended_projects": ["Prepare a polished case study notebook + presentation"]
                }
            ]
        }
    ],

    "Cybersecurity": [
        {
            "phase": "Phase 1: Core Foundations",
            "topics": [
                {
                    "name": "Networking & Protocols",
                    "subtopics": [
                        "OSI vs TCP/IP model, IP addressing and subnetting",
                        "Transport protocols: TCP vs UDP, ports",
                        "DNS, DHCP, ARP, HTTP/HTTPS, TLS handshake basics"
                    ],
                    "tools": ["Wireshark", "tcpdump"],
                    "recommended_projects": ["Capture & analyze network traffic for basic protocols"]
                },
                {
                    "name": "Linux & System Fundamentals",
                    "subtopics": [
                        "Linux filesystem, permissions, process management",
                        "Shell scripting (bash), basic automation",
                        "Logging, package management, basic kernel concepts"
                    ],
                    "tools": ["Ubuntu/CentOS VM", "Bash", "systemctl", "journalctl"],
                    "recommended_projects": ["Set up hardened Linux VM with monitoring and logging"]
                },
                {
                    "name": "Security Principles & Crypto",
                    "subtopics": [
                        "CIA triad (Confidentiality, Integrity, Availability)",
                        "Symmetric/asymmetric encryption, hashing, digital signatures",
                        "Public Key Infrastructure (PKI), TLS basics"
                    ],
                    "tools": ["OpenSSL"],
                    "recommended_projects": ["Implement encryption for data-at-rest and in-transit examples"]
                }
            ]
        },
        {
            "phase": "Phase 2: Offensive Security (Ethical Hacking)",
            "topics": [
                {
                    "name": "Reconnaissance & Footprinting",
                    "subtopics": [
                        "Passive vs active recon, OSINT techniques",
                        "Scanning & enumeration with nmap",
                        "Subdomain discovery, certificate transparency logs, Shodan queries"
                    ],
                    "tools": ["nmap", "theHarvester", "amass", "Shodan"],
                    "recommended_projects": ["Create an OSINT report for a lab domain (ethical & permitted)"]
                },
                {
                    "name": "Vulnerability Discovery & Exploitation",
                    "subtopics": [
                        "Understanding CVEs, vulnerability scanners",
                        "Web exploitation: SQLi, XSS, CSRF, file upload vulnerabilities",
                        "Buffer overflows basics, privilege escalation techniques"
                    ],
                    "tools": ["Burp Suite", "Metasploit", "Nessus", "OWASP ZAP"],
                    "recommended_projects": ["Run a controlled vulnerability assessment on a purposely vulnerable VM (DVWA, Juice Shop)"]
                },
                {
                    "name": "Web Application Security",
                    "subtopics": [
                        "OWASP Top 10 deep-dive",
                        "Secure coding practices, input validation, output encoding",
                        "Authentication & session management vulnerabilities"
                    ],
                    "tools": ["Burp Suite", "sqlmap", "ZAP"],
                    "recommended_projects": ["Find and patch OWASP Top 10 issues in a demo app"]
                }
            ]
        },
        {
            "phase": "Phase 3: Defensive Security & Operations",
            "topics": [
                {
                    "name": "SIEM & Monitoring",
                    "subtopics": [
                        "Log collection, normalization, correlation",
                        "Alerting rules, playbooks, triage workflow",
                        "Building dashboards for threat detection"
                    ],
                    "tools": ["Splunk", "ELK Stack (Elasticsearch, Logstash, Kibana)"],
                    "recommended_projects": ["Create a SIEM dashboard for suspicious login detection"]
                },
                {
                    "name": "Forensics & Incident Response",
                    "subtopics": [
                        "Disk imaging, memory forensics basics",
                        "Timeline analysis, evidence preservation",
                        "Incident response lifecycle and playbook creation"
                    ],
                    "tools": ["Volatility", "Autopsy", "FTK Imager"],
                    "recommended_projects": ["Simulate an incident and perform a basic forensic investigation"]
                },
                {
                    "name": "Security Architecture & Hardening",
                    "subtopics": [
                        "Network segmentation, least privilege, defense in depth",
                        "Endpoint hardening, secure baseline configurations",
                        "Patch management and vulnerability remediation process"
                    ],
                    "tools": ["Ansible (for hardening automation)"],
                    "recommended_projects": ["Harden a service stack and document the process + verification scripts"]
                }
            ]
        },
        {
            "phase": "Phase 4: Specializations & Career",
            "topics": [
                {
                    "name": "Cloud Security",
                    "subtopics": [
                        "Shared responsibility model, IAM principles",
                        "Securing cloud workloads, VPC design, secrets management",
                        "Cloud-native detection and response"
                    ],
                    "tools": ["AWS IAM, Azure AD, GCP IAM", "CloudTrail", "CloudWatch"],
                    "recommended_projects": ["Harden and monitor a sample cloud deployment"]
                },
                {
                    "name": "Application Security & Secure SDLC",
                    "subtopics": [
                        "Secure code reviews, SAST/DAST integration",
                        "Threat modeling, security gates in CI/CD",
                        "Dependency scanning & supply-chain security"
                    ],
                    "tools": ["Snyk", "Dependabot", "SonarQube"],
                    "recommended_projects": ["Integrate SAST/DAST into a CI pipeline and fix findings"]
                },
                {
                    "name": "Certifications & Career Path",
                    "subtopics": [
                        "Entry-level: CompTIA Security+, CySA+",
                        "Pentesting/Offensive: OSCP, eJPT",
                        "Advanced: CISSP, CISM"
                    ],
                    "recommended_projects": ["Build a portfolio of writeups: pentest reports, incident postmortems"]
                }
            ]
        }
    ],

    "Cloud Computing": [
        {
            "phase": "Phase 1: Cloud Fundamentals",
            "topics": [
                {
                    "name": "Cloud Concepts & Architecture",
                    "subtopics": [
                        "IaaS, PaaS, SaaS differences",
                        "Multi-tenant vs single-tenant considerations",
                        "High availability, fault tolerance, DR concepts"
                    ],
                    "recommended_projects": ["Diagram and justify a resilient architecture for a simple web app"]
                },
                {
                    "name": "Core Cloud Services Overview",
                    "subtopics": [
                        "Compute options: VMs, serverless functions, containers",
                        "Storage: object storage, block storage, file storage",
                        "Networking basics in cloud: VPC, subnets, security groups"
                    ],
                    "tools": ["AWS, Azure, GCP consoles"],
                    "recommended_projects": ["Provision cloud resources (free tier) and connect them securely"]
                },
                {
                    "name": "Identity & Access Management",
                    "subtopics": [
                        "Principle of least privilege, roles vs policies",
                        "Federation, SSO, multi-factor authentication",
                        "Secrets management and rotation"
                    ],
                    "tools": ["AWS IAM", "Azure AD", "HashiCorp Vault"],
                    "recommended_projects": ["Implement least-privilege roles and rotate a secret programmatically"]
                }
            ]
        },
        {
            "phase": "Phase 2: Platform Services & Storage",
            "topics": [
                {
                    "name": "Serverless & Managed Services",
                    "subtopics": [
                        "AWS Lambda / Azure Functions / Cloud Functions",
                        "Managed databases: RDS / Cloud SQL / Cosmos DB",
                        "Event-driven architecture: SNS/SQS, Pub/Sub"
                    ],
                    "tools": ["AWS Lambda", "Google Cloud Pub/Sub", "SQS/SNS"],
                    "recommended_projects": ["Create an event-driven image-processing pipeline using serverless"]
                },
                {
                    "name": "Containers & Orchestration",
                    "subtopics": [
                        "Docker fundamentals: images, containers, volumes, networking",
                        "Kubernetes concepts: pods, deployments, services, ingress",
                        "Helm charts for packaging, StatefulSets for stateful apps"
                    ],
                    "tools": ["Docker", "Kubernetes (minikube/kind)", "Helm"],
                    "recommended_projects": ["Deploy a multi-service app to a local k8s cluster with Helm"]
                },
                {
                    "name": "Storage & Databases",
                    "subtopics": [
                        "Object storage patterns (S3), lifecycle policies",
                        "Choosing between SQL vs NoSQL based on use-case",
                        "Caching layers (Redis), CDNs for static content"
                    ],
                    "tools": ["S3", "CloudFront/CDN", "Redis"],
                    "recommended_projects": ["Implement a cache layer and CDN for a static-heavy site"]
                }
            ]
        },
        {
            "phase": "Phase 3: Automation & Infrastructure as Code",
            "topics": [
                {
                    "name": "Infrastructure as Code (IaC)",
                    "subtopics": [
                        "Declarative vs imperative provisioning",
                        "Terraform basics: providers, state, modules",
                        "CloudFormation (AWS) / ARM templates (Azure)"
                    ],
                    "tools": ["Terraform", "CloudFormation"],
                    "recommended_projects": ["Write Terraform to provision a web stack reproducibly"]
                },
                {
                    "name": "CI/CD for Cloud",
                    "subtopics": [
                        "Build pipelines, artifact storage, deployment stages",
                        "Blue/Green and Canary deployments",
                        "Secrets in CI, environment promotion"
                    ],
                    "tools": ["GitHub Actions", "GitLab CI", "ArgoCD"],
                    "recommended_projects": ["Create a CI/CD pipeline that deploys to multiple environments"]
                },
                {
                    "name": "Observability & Cost Management",
                    "subtopics": [
                        "Monitoring: metrics, logs, traces (Prometheus, Grafana)",
                        "Distributed tracing: OpenTelemetry",
                        "Cost optimization strategies and rightsizing"
                    ],
                    "tools": ["Prometheus", "Grafana", "CloudWatch", "OpenTelemetry"],
                    "recommended_projects": ["Build dashboards for key metrics and implement alerts"]
                }
            ]
        },
        {
            "phase": "Phase 4: Security, Networking & Career",
            "topics": [
                {
                    "name": "Cloud Networking & Security",
                    "subtopics": [
                        "VPC design, private/public subnets, NAT, peering",
                        "Security groups, network ACLs, WAFs",
                        "DDoS protection and secure VPC endpoints"
                    ],
                    "tools": ["AWS VPC", "Azure VNet", "Cloud Armor"],
                    "recommended_projects": ["Design a secure multi-tier VPC for a web application"]
                },
                {
                    "name": "Hybrid & Multi-cloud Patterns",
                    "subtopics": [
                        "When to use multi-cloud vs hybrid",
                        "Data replication strategies, federation",
                        "Service mesh basics for cross-cluster communication"
                    ],
                    "tools": ["Istio/Linkerd (service mesh)"],
                    "recommended_projects": ["Prototype a simple multi-cloud failover plan"]
                },
                {
                    "name": "Certifications & Career",
                    "subtopics": [
                        "Cloud associate certs: AWS Certified Cloud Practitioner, Azure Fundamentals",
                        "Professional certs: AWS Solutions Architect, GCP Professional Cloud Architect",
                        "Specializations: Kubernetes (CKA), Security, DevOps"
                    ],
                    "recommended_projects": ["Document architecture decisions and create a study plan for certification"]
                }
            ]
        }
    ],

    "App Development": [
        {
            "phase": "Phase 1: Fundamentals & Native Platforms",
            "topics": [
                {
                    "name": "Programming Languages & Platform Basics",
                    "subtopics": [
                        "Android: Java basics (older), Kotlin (preferred) — coroutines, null-safety",
                        "iOS: Swift & SwiftUI basics, optionals, structs vs classes",
                        "App lifecycle, threading, async patterns"
                    ],
                    "tools": ["Android Studio", "Xcode", "Kotlin", "Swift"],
                    "recommended_projects": ["Simple native app for Android + iOS tutorial exercises"]
                },
                {
                    "name": "Mobile UI & UX Patterns",
                    "subtopics": [
                        "Layouts: ConstraintLayout (Android), SwiftUI layout system",
                        "Navigation patterns: stack, tab, drawer, deep linking",
                        "Platform-specific UX guidelines (Material Design, Human Interface Guidelines)"
                    ],
                    "tools": ["Material Design resources", "Figma for prototyping"],
                    "recommended_projects": ["Design and implement a multi-screen app with navigation and animations"]
                },
                {
                    "name": "Local Data & Persistence",
                    "subtopics": [
                        "Local storage: SharedPreferences/UserDefaults, SQLite, Room (Android)",
                        "File storage and handling, secure storage (Keychain/Keystore)",
                        "Caching strategies and offline-first patterns"
                    ],
                    "tools": ["Room", "Realm", "SQLite", "Secure Storage plugins"],
                    "recommended_projects": ["Implement offline caching + sync mechanism for a mobile app"]
                }
            ]
        },
        {
            "phase": "Phase 2: Cross-Platform Frameworks",
            "topics": [
                {
                    "name": "Flutter",
                    "subtopics": [
                        "Dart language overview, widget tree, stateful vs stateless",
                        "State management: Provider, Riverpod, Bloc",
                        "Platform channels, testing, performance profiling"
                    ],
                    "tools": ["Flutter SDK", "Dart DevTools"],
                    "recommended_projects": ["Build a cross-platform app with state management and native integration"]
                },
                {
                    "name": "React Native",
                    "subtopics": [
                        "React Native components, bridging native modules",
                        "Navigation solutions (React Navigation), performance considerations",
                        "Styling, gestures, and animations"
                    ],
                    "tools": ["React Native CLI / Expo", "Flipper"],
                    "recommended_projects": ["Port a simple native app to React Native or build new app using Expo"]
                },
                {
                    "name": "Backend & Real-time",
                    "subtopics": [
                        "Using Firebase for authentication, realtime database, cloud functions",
                        "RESTful API consumption, GraphQL use cases on mobile",
                        "WebSockets and push notifications for real-time features"
                    ],
                    "tools": ["Firebase", "GraphQL (Apollo)"],
                    "recommended_projects": ["Build a chat app with real-time messaging and push notifications"]
                }
            ]
        },
        {
            "phase": "Phase 3: Testing, Deployment & Advanced Topics",
            "topics": [
                {
                    "name": "Testing & QA",
                    "subtopics": [
                        "Unit testing, UI testing (Espresso, XCTest), integration testing",
                        "End-to-end testing for cross-platform apps",
                        "Beta distribution and crash reporting"
                    ],
                    "tools": ["JUnit/Espresso", "XCTest", "Firebase Crashlytics"],
                    "recommended_projects": ["Set up CI with automated tests and distribute beta builds"]
                },
                {
                    "name": "App Store Release & CI/CD",
                    "subtopics": [
                        "Signing, provisioning profiles, app store metadata",
                        "Automating builds: Fastlane, GitHub Actions, Codemagic",
                        "Monitoring releases, rollback strategies"
                    ],
                    "tools": ["Fastlane", "App Store Connect", "Google Play Console"],
                    "recommended_projects": ["Automate build + release pipeline for Android/iOS apps"]
                },
                {
                    "name": "Performance & Security",
                    "subtopics": [
                        "Memory management, battery & network optimization",
                        "Secure storage, in-app encryption, secure authentication",
                        "Obfuscation and protecting API keys/secrets"
                    ],
                    "tools": ["ProGuard/R8", "Keychain/Keystore", "OWASP Mobile Security Testing Guide"],
                    "recommended_projects": ["Profile and optimize an app to reduce battery and memory usage"]
                }
            ]
        },
        {
            "phase": "Phase 4: Product & Career",
            "topics": [
                {
                    "name": "Product Thinking & Monetization",
                    "subtopics": [
                        "Understanding user flows and retention metrics",
                        "Monetization methods: ads, IAP, subscriptions",
                        "User feedback loops, analytics integration"
                    ],
                    "tools": ["Google Analytics for Firebase", "Amplitude"],
                    "recommended_projects": ["Design an MVP, run a small user test, gather analytics"]
                },
                {
                    "name": "Portfolio & Job Prep",
                    "subtopics": [
                        "Polish a few production-ready apps, write case studies",
                        "Prepare for platform-specific interviews (Android/iOS)",
                        "Open-source contributions and plugin creation"
                    ],
                    "recommended_projects": ["Publish an app to Play Store/App Store with marketing assets"]
                }
            ]
        }
    ],
    
    "AI & Machine Learning": [
        {
            "phase": "Phase 1: Foundations of AI & ML",
            "topics": [
                {
                    "name": "Mathematical Foundations",
                    "description": "Master the math concepts that power machine learning and AI models.",
                    "subtopics": [
                        "Linear Algebra: vectors, matrices, eigenvalues, and matrix operations",
                        "Calculus: gradients, partial derivatives, and optimization concepts",
                        "Probability and Statistics: distributions, Bayes theorem, hypothesis testing",
                        "Information theory: entropy, cross-entropy, and KL divergence"
                    ],
                    "tools": ["NumPy", "SymPy", "Matplotlib"],
                    "recommended_projects": ["Visualize gradient descent optimization in Python"]
                },
                {
                    "name": "Python for Data Science",
                    "description": "Develop core Python programming skills for AI and data analysis.",
                    "subtopics": [
                        "Python basics: loops, functions, OOP, file handling",
                        "Libraries for data: NumPy, Pandas, Matplotlib, Seaborn",
                        "Data manipulation, cleaning, and preprocessing",
                        "Working with CSV, JSON, and database connections"
                    ],
                    "tools": ["Python", "Pandas", "Jupyter Notebook"],
                    "recommended_projects": ["Analyze a public dataset and plot visual insights"]
                },
                {
                    "name": "Data Preprocessing & Feature Engineering",
                    "description": "Prepare high-quality data for modeling and AI training.",
                    "subtopics": [
                        "Handling missing data and outliers",
                        "Encoding categorical variables",
                        "Scaling and normalization (MinMaxScaler, StandardScaler)",
                        "Feature selection and dimensionality reduction (PCA)"
                    ],
                    "tools": ["Scikit-learn", "Pandas", "NumPy"],
                    "recommended_projects": ["Create a feature pipeline for a classification dataset"]
                }
            ]
        },
        {
            "phase": "Phase 2: Core Machine Learning",
            "topics": [
                {
                    "name": "Supervised Learning",
                    "description": "Learn algorithms that map labeled input data to outputs.",
                    "subtopics": [
                        "Regression: Linear, Ridge, Lasso, Polynomial",
                        "Classification: Logistic Regression, KNN, SVM, Decision Trees, Random Forest",
                        "Evaluation metrics: accuracy, precision, recall, F1-score, ROC-AUC",
                        "Cross-validation and model selection"
                    ],
                    "tools": ["Scikit-learn", "XGBoost"],
                    "recommended_projects": ["Build a spam email classifier using logistic regression"]
                },
                {
                    "name": "Unsupervised Learning",
                    "description": "Find hidden patterns or groupings in unlabeled data.",
                    "subtopics": [
                        "Clustering: K-Means, DBSCAN, Hierarchical Clustering",
                        "Dimensionality reduction: PCA, t-SNE, UMAP",
                        "Anomaly detection methods",
                        "Market basket analysis and association rules"
                    ],
                    "tools": ["Scikit-learn", "Seaborn", "Yellowbrick"],
                    "recommended_projects": ["Cluster customers by purchasing behavior for segmentation"]
                },
                {
                    "name": "Model Optimization & Validation",
                    "description": "Improve model accuracy and generalization.",
                    "subtopics": [
                        "Hyperparameter tuning: GridSearchCV, RandomizedSearchCV",
                        "Bias-variance tradeoff",
                        "Regularization techniques",
                        "Ensemble learning: Bagging, Boosting, Stacking"
                    ],
                    "tools": ["Scikit-learn", "Optuna"],
                    "recommended_projects": ["Tune hyperparameters of RandomForest on a dataset"]
                }
            ]
        },
        {
            "phase": "Phase 3: Deep Learning & Neural Networks",
            "topics": [
                {
                    "name": "Neural Network Fundamentals",
                    "description": "Understand how deep learning models work and train.",
                    "subtopics": [
                        "Perceptron, activation functions, loss functions",
                        "Forward and backward propagation",
                        "Batch normalization and dropout",
                        "Gradient descent, learning rate, and optimizers (SGD, Adam)"
                    ],
                    "tools": ["TensorFlow", "Keras", "PyTorch"],
                    "recommended_projects": ["Build a neural network from scratch using NumPy"]
                },
                {
                    "name": "Computer Vision",
                    "description": "Develop AI models to process and understand visual data.",
                    "subtopics": [
                        "Convolutional Neural Networks (CNNs)",
                        "Transfer learning and pretrained models (VGG, ResNet)",
                        "Image augmentation and preprocessing",
                        "Object detection (YOLO, SSD), segmentation (U-Net)"
                    ],
                    "tools": ["OpenCV", "TensorFlow", "PyTorch"],
                    "recommended_projects": ["Build an image classifier using CNN on CIFAR-10"]
                },
                {
                    "name": "Natural Language Processing (NLP)",
                    "description": "Teach AI to process and understand human language.",
                    "subtopics": [
                        "Text preprocessing: tokenization, stemming, lemmatization",
                        "Word embeddings: Word2Vec, GloVe, FastText",
                        "Recurrent Neural Networks (RNNs), LSTMs, GRUs",
                        "Transformers, BERT, GPT architecture basics"
                    ],
                    "tools": ["NLTK", "SpaCy", "Hugging Face Transformers"],
                    "recommended_projects": ["Train a sentiment analysis model on movie reviews"]
                }
            ]
        },
        {
            "phase": "Phase 4: Advanced AI Topics & Career",
            "topics": [
                {
                    "name": "Reinforcement Learning",
                    "description": "Learn how agents interact with environments to maximize rewards.",
                    "subtopics": [
                        "Markov Decision Processes (MDP)",
                        "Q-learning and SARSA algorithms",
                        "Deep Q Networks (DQN)",
                        "Policy gradients and actor-critic models"
                    ],
                    "tools": ["Gymnasium (OpenAI Gym)", "PyTorch"],
                    "recommended_projects": ["Train an AI agent to play a simple game (CartPole or Snake)"]
                },
                {
                    "name": "Model Deployment & MLOps",
                    "description": "Deploy ML models for real-world use and automate model lifecycle.",
                    "subtopics": [
                        "Model serialization (pickle, joblib)",
                        "REST API deployment with FastAPI/Flask",
                        "Model monitoring and retraining",
                        "CI/CD pipelines for ML (MLflow, Kubeflow)"
                    ],
                    "tools": ["MLflow", "Docker", "FastAPI", "AWS Sagemaker"],
                    "recommended_projects": ["Deploy a trained model as an API using Docker & FastAPI"]
                },
                {
                    "name": "Ethics, Explainability & AI Governance",
                    "description": "Build responsible AI that’s interpretable, fair, and transparent.",
                    "subtopics": [
                        "Model explainability: SHAP, LIME",
                        "Bias detection and fairness metrics",
                        "Privacy-preserving ML and data anonymization",
                        "Responsible AI and AI ethics principles"
                    ],
                    "tools": ["SHAP", "LIME", "Fairlearn"],
                    "recommended_projects": ["Analyze bias in a real-world dataset and suggest mitigation steps"]
                },
                {
                    "name": "Career Preparation & Research",
                    "description": "Prepare for industry or academic roles in AI/ML.",
                    "subtopics": [
                        "Portfolio building: GitHub, Kaggle, Medium blogs",
                        "Research paper reading and implementation (ArXiv, Papers with Code)",
                        "Interview preparation and problem-solving",
                        "AI certifications and hackathons"
                    ],
                    "tools": ["Kaggle", "Colab", "ArXiv", "Weights & Biases"],
                    "recommended_projects": ["Build and document 3 portfolio-level AI/ML projects with writeups"]
                }
            ]
        }
    ],
    
    "Blockchain": [
        {
            "phase": "Phase 1: Foundations of Blockchain",
            "topics": [
                {
                    "name": "Blockchain Fundamentals",
                    "description": "Understand the core principles, architecture, and purpose of blockchain technology.",
                    "subtopics": [
                        "Distributed ledger technology (DLT)",
                        "Blocks, hashes, and consensus mechanisms",
                        "Public vs private blockchains",
                        "Cryptography essentials (SHA-256, RSA, ECDSA)",
                        "Smart contracts overview"
                    ],
                    "tools": ["Bitcoin Core", "Ethereum Whitepaper", "Block Explorer"],
                    "recommended_projects": ["Create a visual diagram explaining how blockchain stores transactions"]
                },
                {
                    "name": "Cryptography & Hashing",
                    "description": "Learn how cryptographic algorithms secure blockchain systems.",
                    "subtopics": [
                        "Symmetric & asymmetric encryption",
                        "Hashing algorithms (SHA-256, Keccak)",
                        "Digital signatures, HMACs",
                        "Merkle trees and proofs of inclusion",
                        "Public/Private key generation"
                    ],
                    "tools": ["OpenSSL", "Python hashlib", "CrypTool"],
                    "recommended_projects": ["Build a hash verification tool using Python"]
                },
                {
                    "name": "Ethereum & Smart Contracts Basics",
                    "subtopics": [
                        "Ethereum architecture and EVM",
                        "Accounts, gas, and transactions",
                        "Smart contract deployment lifecycle",
                        "Solidity syntax and data types"
                    ],
                    "tools": ["Remix IDE", "MetaMask", "Ganache"],
                    "recommended_projects": ["Write and deploy a simple 'Hello Blockchain' smart contract"]
                }
            ]
        },
        {
            "phase": "Phase 2: Development & Smart Contracts",
            "topics": [
                {
                    "name": "Solidity & Smart Contract Design",
                    "subtopics": [
                        "Functions, modifiers, mappings, structs",
                        "Events and logging",
                        "Inheritance and interfaces",
                        "Error handling and fallback functions",
                        "Security pitfalls (reentrancy, overflow)"
                    ],
                    "tools": ["Solidity", "Remix", "Hardhat", "Truffle"],
                    "recommended_projects": ["Develop a token (ERC-20 or ERC-721) and deploy it to testnet"]
                },
                {
                    "name": "Blockchain Development Frameworks",
                    "subtopics": [
                        "Hardhat and Truffle project setup",
                        "Testing with Mocha/Chai",
                        "Interacting via Web3.js and Ethers.js",
                        "Automated deployments and verifications"
                    ],
                    "tools": ["Hardhat", "Web3.js", "Ethers.js", "Alchemy"],
                    "recommended_projects": ["Create and test a decentralized voting smart contract"]
                },
                {
                    "name": "DeFi & Token Standards",
                    "subtopics": [
                        "ERC standards (ERC-20, ERC-721, ERC-1155)",
                        "DEXs, liquidity pools, and yield farming",
                        "Stablecoins and governance tokens",
                        "DeFi security considerations"
                    ],
                    "tools": ["Uniswap SDK", "PancakeSwap Testnet", "OpenZeppelin Contracts"],
                    "recommended_projects": ["Clone a simple DEX and simulate token swaps on testnet"]
                }
            ]
        },
        {
            "phase": "Phase 3: Advanced Blockchain Development",
            "topics": [
                {
                    "name": "Layer 2 & Scalability Solutions",
                    "subtopics": [
                        "State channels, rollups, plasma chains",
                        "Cross-chain interoperability (bridges)",
                        "Gas optimization and batching",
                        "Oracles and off-chain data"
                    ],
                    "tools": ["Polygon", "Optimism", "Chainlink"],
                    "recommended_projects": ["Integrate a Chainlink oracle into your smart contract"]
                },
                {
                    "name": "NFTs & Web3 dApps",
                    "subtopics": [
                        "ERC-721 and metadata",
                        "Minting, burning, and transferring NFTs",
                        "Connecting wallets (MetaMask, WalletConnect)",
                        "Web3 front-end integration"
                    ],
                    "tools": ["React", "Ethers.js", "Pinata", "IPFS"],
                    "recommended_projects": ["Build an NFT minting dApp connected to a smart contract"]
                },
                {
                    "name": "Blockchain Security",
                    "subtopics": [
                        "Smart contract auditing",
                        "Static analysis tools and fuzzing",
                        "Common exploits and mitigations",
                        "Formal verification overview"
                    ],
                    "tools": ["Mythril", "Slither", "Echidna"],
                    "recommended_projects": ["Perform a basic audit of your deployed smart contract"]
                }
            ]
        },
        {
            "phase": "Phase 4: Ecosystem, Deployment & Career",
            "topics": [
                {
                    "name": "Blockchain Deployment & Node Management",
                    "subtopics": [
                        "Running full nodes and validators",
                        "Interacting with testnets and mainnets",
                        "Gas price management and transaction optimization",
                        "Blockchain monitoring and analytics"
                    ],
                    "tools": ["Infura", "Alchemy", "Etherscan APIs"],
                    "recommended_projects": ["Deploy your contract on Polygon or Sepolia testnet"]
                },
                {
                    "name": "Web3 Ecosystem & DAOs",
                    "subtopics": [
                        "DAO structure, governance tokens, and voting",
                        "DAO tooling (Snapshot, Aragon)",
                        "Building a small community-driven token project"
                    ],
                    "tools": ["Aragon", "Snapshot", "Safe"],
                    "recommended_projects": ["Create a DAO prototype for community voting on proposals"]
                },
                {
                    "name": "Certifications & Career Prep",
                    "subtopics": [
                        "Certifications: Blockchain Council, ConsenSys, IBM Blockchain",
                        "Portfolio building with GitHub projects and testnet deployments",
                        "Smart contract audits, freelancing, and job prep"
                    ],
                    "tools": ["Remix", "Hardhat", "OpenZeppelin"],
                    "recommended_projects": ["Publish 3 production-ready smart contracts to GitHub"]
                }
            ]
        }
    ],
    
    "Game Development": [
        {
            "phase": "Phase 1: Foundations of Game Development",
            "topics": [
                {
                    "name": "Programming Fundamentals for Games",
                    "description": "Learn the essential programming concepts that form the foundation for building games.",
                    "subtopics": [
                        "Languages: C#, C++, Python (for scripting)",
                        "Object-Oriented Programming (OOP) concepts",
                        "Game loops, delta time, and frame updates",
                        "Input handling (keyboard, mouse, controllers)",
                        "Data structures for games (arrays, queues, trees, graphs)"
                    ],
                    "tools": ["Visual Studio", "Rider", "VS Code"],
                    "recommended_projects": ["Create a basic console-based snake or pong game"]
                },
                {
                    "name": "Mathematics & Physics for Games",
                    "description": "Develop a strong grasp of the mathematical and physical principles used in game logic and rendering.",
                    "subtopics": [
                        "2D and 3D coordinate systems",
                        "Vectors, matrices, transformations",
                        "Collision detection and resolution",
                        "Kinematics and dynamics (velocity, acceleration)",
                        "Raycasting and line intersection"
                    ],
                    "tools": ["Desmos", "GeoGebra", "Unity Physics Debugger"],
                    "recommended_projects": ["Build a simple physics simulation (ball bounce or projectile motion)"]
                },
                {
                    "name": "Game Engines Overview",
                    "description": "Get familiar with popular engines and their ecosystems.",
                    "subtopics": [
                        "Unity basics: scenes, game objects, prefabs, components",
                        "Unreal Engine basics: Blueprints, actors, materials",
                        "Godot overview: nodes, signals, GDScript",
                        "Scripting systems and editor tools"
                    ],
                    "tools": ["Unity", "Unreal Engine", "Godot"],
                    "recommended_projects": ["Build your first playable 2D scene in Unity or Godot"]
                },
                {
                    "name": "2D Game Design & Assets",
                    "description": "Learn how to create 2D games and work with sprites, tilemaps, and UI.",
                    "subtopics": [
                        "Sprite sheets and animations",
                        "Parallax scrolling backgrounds",
                        "Tilemaps and level editors",
                        "UI and HUD creation",
                        "Basic game states (menu, pause, game over)"
                    ],
                    "tools": ["Aseprite", "Tiled", "Photoshop", "Unity 2D Toolkit"],
                    "recommended_projects": ["Design a 2D platformer with parallax backgrounds and animated characters"]
                }
            ]
        },
        {
            "phase": "Phase 2: Intermediate 3D & Gameplay Systems",
            "topics": [
                {
                    "name": "3D Game Fundamentals",
                    "description": "Transition from 2D to 3D development using modern engines.",
                    "subtopics": [
                        "Meshes, materials, and textures",
                        "Lighting, shadows, and rendering pipeline",
                        "Cameras, movement, and input in 3D",
                        "Prefabs, physics colliders, rigidbodies",
                        "Scene optimization and culling"
                    ],
                    "tools": ["Unity", "Unreal Engine", "Blender"],
                    "recommended_projects": ["Create a 3D maze game with lighting and camera control"]
                },
                {
                    "name": "Game Mechanics & Systems",
                    "description": "Design reusable systems that define gameplay logic.",
                    "subtopics": [
                        "Player controllers (FPS/TPS movement)",
                        "AI basics: pathfinding, behavior trees, state machines",
                        "Combat systems (health, damage, projectiles)",
                        "Inventory systems and save/load mechanics",
                        "Dialogue and quest systems"
                    ],
                    "tools": ["NavMesh", "Behavior Designer", "Cinemachine"],
                    "recommended_projects": ["Develop a 3D RPG prototype with enemy AI and quests"]
                },
                {
                    "name": "Audio & Visual Effects",
                    "description": "Add immersive experiences using sound and particle effects.",
                    "subtopics": [
                        "Audio import, 3D sound, and spatial audio",
                        "Music management and triggers",
                        "Particle systems (fire, smoke, explosions)",
                        "Post-processing: bloom, depth of field, color grading"
                    ],
                    "tools": ["FMOD", "Wwise", "Audacity", "Unity Particle System"],
                    "recommended_projects": ["Add dynamic sound and VFX to your 3D game scene"]
                },
                {
                    "name": "Level Design & Environment Art",
                    "subtopics": [
                        "Environment composition principles",
                        "Lighting for mood and readability",
                        "Level design flow and pacing",
                        "World-building and storytelling through environments"
                    ],
                    "tools": ["ProBuilder", "Blender", "Substance Painter"],
                    "recommended_projects": ["Design a small open-world level with environmental storytelling"]
                }
            ]
        },
        {
            "phase": "Phase 3: Advanced Development & Optimization",
            "topics": [
                {
                    "name": "Multiplayer & Networking",
                    "description": "Implement multiplayer systems and synchronization techniques.",
                    "subtopics": [
                        "Client-server architecture",
                        "RPCs and synchronization models",
                        "Latency compensation and interpolation",
                        "Matchmaking and lobbies",
                        "Voice chat and real-time updates"
                    ],
                    "tools": ["Photon", "Mirror", "UNet", "Firebase Realtime Database"],
                    "recommended_projects": ["Create a simple 2-player online battle game"]
                },
                {
                    "name": "Optimization & Performance",
                    "description": "Ensure smooth gameplay and optimized rendering pipelines.",
                    "subtopics": [
                        "Frame rate optimization and profiling",
                        "Memory management and garbage collection",
                        "Draw calls and batching",
                        "Asset compression and streaming",
                        "Multithreading and job systems"
                    ],
                    "tools": ["Unity Profiler", "RenderDoc", "Pix", "Unreal Insights"],
                    "recommended_projects": ["Optimize an existing 3D scene for 60 FPS across devices"]
                },
                {
                    "name": "Advanced Graphics & Shader Programming",
                    "description": "Dive deeper into custom rendering and visual effects.",
                    "subtopics": [
                        "Shader basics: vertex, fragment, and compute shaders",
                        "PBR materials and lighting models",
                        "Post-processing stack customization",
                        "Procedural generation (terrain, textures)"
                    ],
                    "tools": ["Shader Graph", "HLSL/GLSL", "Amplify Shader Editor"],
                    "recommended_projects": ["Create a custom water or fire shader for your 3D game"]
                },
                {
                    "name": "Game AI Systems",
                    "subtopics": [
                        "Decision-making systems (utility AI, GOAP)",
                        "Pathfinding optimization with A* and navmeshes",
                        "Procedural content generation (PCG)",
                        "AI difficulty balancing"
                    ],
                    "tools": ["NavMesh", "ML-Agents (Unity AI)", "TensorFlow for AI-driven NPCs"],
                    "recommended_projects": ["Implement a tactical AI system for an enemy squad"]
                }
            ]
        },
        {
            "phase": "Phase 4: Publishing, Monetization & Career",
            "topics": [
                {
                    "name": "Game Testing & QA",
                    "subtopics": [
                        "Playtesting and feedback loops",
                        "Bug tracking, issue triage, and regression testing",
                        "Automation for testing gameplay scenarios"
                    ],
                    "tools": ["Jira", "TestRail", "Unity Test Runner"],
                    "recommended_projects": ["Create a QA checklist and test a small 3D demo project"]
                },
                {
                    "name": "Game Publishing & Distribution",
                    "subtopics": [
                        "Build pipelines for multiple platforms (PC, mobile, console)",
                        "App Store, Play Store, and Steam publishing",
                        "Packaging, updates, and patch management",
                        "Marketing and community engagement"
                    ],
                    "tools": ["Steamworks", "Itch.io", "Google Play Console"],
                    "recommended_projects": ["Publish your game demo on Itch.io with trailer and changelog"]
                },
                {
                    "name": "Monetization & Post-Launch Support",
                    "subtopics": [
                        "Freemium and premium models",
                        "In-app purchases and ads integration",
                        "Live ops, analytics, and retention tracking",
                        "Game updates and content roadmaps"
                    ],
                    "tools": ["Unity Ads", "Google Analytics", "Firebase Analytics"],
                    "recommended_projects": ["Implement basic analytics and monetization in your game"]
                },
                {
                    "name": "Portfolio & Career Growth",
                    "subtopics": [
                        "Showcasing projects on ArtStation, Itch.io, or Steam",
                        "Building developer blogs and GitHub repos",
                        "Networking in game dev communities",
                        "Applying for internships or indie collaborations"
                    ],
                    "tools": ["ArtStation", "GitHub", "LinkedIn"],
                    "recommended_projects": ["Publish 3 polished games with proper documentation and portfolio writeups"]
                }
            ]
        }
    ],
    
    "UI/UX Design": [
        {
            "phase": "Phase 1: Foundations of Design Thinking",
            "topics": [
                {
                    "name": "Introduction to UI/UX Design",
                    "description": "Understand the fundamentals of user experience and interface design.",
                    "subtopics": [
                        "Difference between UI, UX, and Product Design",
                        "Human-Centered Design principles",
                        "UX design process: Research → Define → Ideate → Prototype → Test",
                        "Empathy and user psychology",
                        "Design roles and responsibilities in a tech team"
                    ],
                    "tools": ["Miro", "Notion", "Google Docs"],
                    "recommended_projects": ["Create a UX process diagram explaining the design stages"]
                },
                {
                    "name": "User Research & Analysis",
                    "description": "Learn how to understand user needs and pain points through research.",
                    "subtopics": [
                        "User interviews and surveys",
                        "Personas, empathy maps, and journey mapping",
                        "Competitor analysis and heuristic evaluation",
                        "Defining problem statements and use cases",
                        "Quantitative vs qualitative research methods"
                    ],
                    "tools": ["Maze", "Airtable", "Google Forms", "Figma FigJam"],
                    "recommended_projects": ["Conduct user interviews for a sample app idea and create user personas"]
                },
                {
                    "name": "UX Principles & Cognitive Psychology",
                    "description": "Master the psychological aspects that shape user behavior and decision-making.",
                    "subtopics": [
                        "Gestalt principles of perception",
                        "Hick’s Law, Fitts’ Law, and Miller’s Law",
                        "Cognitive load and information hierarchy",
                        "Emotional design and user trust",
                        "Accessibility and inclusivity (WCAG basics)"
                    ],
                    "tools": ["Contrast Checker", "Stark", "Color Oracle"],
                    "recommended_projects": ["Analyze an existing app’s UX flaws and suggest redesign improvements"]
                }
            ]
        },
        {
            "phase": "Phase 2: Visual Design & UI Fundamentals",
            "topics": [
                {
                    "name": "Design Principles & Visual Hierarchy",
                    "description": "Explore the core elements that make interfaces aesthetically pleasing and functional.",
                    "subtopics": [
                        "Typography, color theory, and layout grids",
                        "Alignment, spacing, and proximity",
                        "Consistency and scalability in visual design",
                        "Design systems and reusable components"
                    ],
                    "tools": ["Figma", "Sketch", "Adobe XD"],
                    "recommended_projects": ["Design a responsive homepage layout using visual hierarchy rules"]
                },
                {
                    "name": "Wireframing & Low-Fidelity Prototyping",
                    "description": "Build the blueprint of your design using wireframes and basic structures.",
                    "subtopics": [
                        "Low-fidelity wireframes (pen and paper or digital)",
                        "Grids, spacing, and responsive layouts",
                        "Designing for different devices and breakpoints",
                        "Translating sketches into wireframes"
                    ],
                    "tools": ["Figma", "Balsamiq", "Whimsical"],
                    "recommended_projects": ["Create wireframes for a mobile to-do app"]
                },
                {
                    "name": "High-Fidelity UI Design",
                    "description": "Develop pixel-perfect, interactive user interfaces.",
                    "subtopics": [
                        "Component libraries and variants",
                        "Color palettes, iconography, and imagery",
                        "Micro-interactions and transitions",
                        "Design tokens and responsiveness"
                    ],
                    "tools": ["Figma", "Adobe XD", "Sketch", "LottieFiles"],
                    "recommended_projects": ["Design a high-fidelity interface for a social media app"]
                },
                {
                    "name": "UI Patterns & Usability",
                    "description": "Learn standard patterns used across interfaces to enhance usability.",
                    "subtopics": [
                        "Navigation patterns (tabs, drawers, menus)",
                        "Form design and validation",
                        "Error states and empty screens",
                        "Dark mode and accessibility adjustments"
                    ],
                    "tools": ["Material Design", "Human Interface Guidelines (Apple)", "Fluent UI"],
                    "recommended_projects": ["Design UI states (loading, error, success) for a signup form"]
                }
            ]
        },
        {
            "phase": "Phase 3: Prototyping, Testing & Collaboration",
            "topics": [
                {
                    "name": "Interactive Prototyping",
                    "description": "Transform static designs into interactive prototypes.",
                    "subtopics": [
                        "Clickable prototypes in Figma or XD",
                        "Smart animations and transitions",
                        "Microinteractions and motion design",
                        "Usability testing with prototypes"
                    ],
                    "tools": ["Figma Prototype", "InVision", "ProtoPie"],
                    "recommended_projects": ["Create an interactive prototype for an e-commerce checkout flow"]
                },
                {
                    "name": "User Testing & Feedback",
                    "description": "Validate your designs with real users and iterate based on feedback.",
                    "subtopics": [
                        "A/B testing and usability sessions",
                        "Heatmaps and session recordings",
                        "Usability metrics (SUS, NPS, task success rate)",
                        "Iterative design and feedback loops"
                    ],
                    "tools": ["Hotjar", "Maze", "Lookback.io"],
                    "recommended_projects": ["Conduct usability testing on your prototype with 5 users and document results"]
                },
                {
                    "name": "Design Systems & Handoff",
                    "description": "Build scalable, reusable design systems for consistency and developer collaboration.",
                    "subtopics": [
                        "Component libraries and documentation",
                        "Auto-layouts and design tokens",
                        "Collaboration with developers (handoff via Figma/Zeplin)",
                        "Maintaining design updates and version control"
                    ],
                    "tools": ["Figma Design System", "Zeplin", "Storybook"],
                    "recommended_projects": ["Create a reusable design system for buttons, inputs, and forms"]
                }
            ]
        },
        {
            "phase": "Phase 4: Career, Portfolio & Advanced Topics",
            "topics": [
                {
                    "name": "Portfolio Building",
                    "description": "Craft an impactful portfolio that showcases your design thinking and outcomes.",
                    "subtopics": [
                        "Structuring case studies",
                        "Storytelling with visuals and data",
                        "Highlighting challenges and solutions",
                        "Presenting process (not just screens)"
                    ],
                    "tools": ["Notion", "Behance", "Dribbble"],
                    "recommended_projects": ["Build 3 polished design case studies for different product types"]
                },
                {
                    "name": "Design for Accessibility & Ethics",
                    "description": "Ensure your designs are inclusive and ethically sound.",
                    "subtopics": [
                        "Color contrast, font readability, ARIA guidelines",
                        "Designing for disabilities and diverse users",
                        "Ethical design and dark patterns avoidance"
                    ],
                    "tools": ["Accessibility Insights", "Color Contrast Analyzer", "Axe DevTools"],
                    "recommended_projects": ["Redesign a website section to be WCAG compliant"]
                },
                {
                    "name": "Freelancing & Career Growth",
                    "description": "Explore paths in UI/UX careers and freelancing opportunities.",
                    "subtopics": [
                        "Building client proposals and pricing models",
                        "Interview prep for UX roles",
                        "Networking with the design community",
                        "Continuous learning through mentorship and feedback"
                    ],
                    "tools": ["LinkedIn", "Upwork", "Fiverr"],
                    "recommended_projects": ["Design and deliver a freelance project for a small business or NGO"]
                },
                {
                    "name": "Future of UI/UX Design",
                    "description": "Prepare for upcoming trends and technologies shaping design.",
                    "subtopics": [
                        "Designing for AR/VR interfaces",
                        "AI-assisted design tools",
                        "Voice UI and conversational design",
                        "Motion design and 3D UI"
                    ],
                    "tools": ["Figma AI", "Spline", "Framer", "Adobe Aero"],
                    "recommended_projects": ["Prototype a 3D or AR-based interface concept"]
                }
            ]
        }
    ],
    
    "DevOps": [
        {
            "phase": "Phase 1: Foundations of DevOps & Linux",
            "topics": [
                {
                    "name": "Introduction to DevOps",
                    "description": "Understand what DevOps is, its principles, and its impact on modern software development.",
                    "subtopics": [
                        "Definition, goals, and culture of DevOps",
                        "DevOps lifecycle: Plan → Code → Build → Test → Release → Deploy → Operate → Monitor",
                        "Agile, Scrum, and Continuous Delivery alignment",
                        "DevOps vs SysAdmin vs SRE",
                        "Key DevOps tools overview"
                    ],
                    "tools": ["Trello", "Jira", "Lucidchart"],
                    "recommended_projects": ["Create a DevOps workflow diagram for a sample app"]
                },
                {
                    "name": "Linux & Shell Scripting",
                    "description": "Learn the core Linux commands and shell scripting used in DevOps automation.",
                    "subtopics": [
                        "File system navigation, permissions, and process management",
                        "System monitoring and logs (ps, top, journalctl)",
                        "Networking tools: ping, netstat, curl, scp, ssh",
                        "Bash scripting basics (loops, conditions, cron jobs)",
                        "Environment variables and .bashrc"
                    ],
                    "tools": ["Ubuntu", "CentOS", "WSL", "VS Code Terminal"],
                    "recommended_projects": ["Automate backup and cleanup tasks using Bash scripts"]
                },
                {
                    "name": "Version Control with Git",
                    "description": "Manage code effectively using Git and GitHub for collaboration and automation.",
                    "subtopics": [
                        "Git fundamentals: init, clone, add, commit, push, pull",
                        "Branching strategies and merges",
                        "Tagging, rebasing, and conflict resolution",
                        "CI triggers using GitHub Actions or GitLab CI",
                        "Managing access and security in repositories"
                    ],
                    "tools": ["Git", "GitHub", "GitLab", "Bitbucket"],
                    "recommended_projects": ["Set up a GitHub repo with a CI pipeline trigger on commit"]
                }
            ]
        },
        {
            "phase": "Phase 2: CI/CD and Automation",
            "topics": [
                {
                    "name": "Continuous Integration (CI)",
                    "description": "Automate code building, testing, and merging for faster integration.",
                    "subtopics": [
                        "Principles of CI/CD pipelines",
                        "Setting up CI with GitHub Actions or Jenkins",
                        "Running unit tests and linting automatically",
                        "Caching dependencies for faster builds",
                        "Notifications and build status tracking"
                    ],
                    "tools": ["Jenkins", "GitHub Actions", "CircleCI", "Travis CI"],
                    "recommended_projects": ["Build a CI pipeline that tests and lints a Node.js project"]
                },
                {
                    "name": "Continuous Deployment (CD)",
                    "description": "Deploy code automatically to production environments.",
                    "subtopics": [
                        "Blue-green and canary deployments",
                        "Rollback strategies and release tagging",
                        "Artifact management and versioning",
                        "Secrets management for deployments"
                    ],
                    "tools": ["ArgoCD", "Spinnaker", "GitLab CI/CD"],
                    "recommended_projects": ["Implement automated deployment to a staging server"]
                },
                {
                    "name": "Infrastructure as Code (IaC)",
                    "description": "Manage infrastructure through versioned code using IaC tools.",
                    "subtopics": [
                        "Concept of declarative vs imperative IaC",
                        "Terraform fundamentals (providers, variables, state)",
                        "Cloud resource provisioning with IaC",
                        "Remote state management and workspaces",
                        "Infrastructure drift detection"
                    ],
                    "tools": ["Terraform", "Pulumi"],
                    "recommended_projects": ["Provision AWS EC2 and S3 resources using Terraform"]
                }
            ]
        },
        {
            "phase": "Phase 3: Containers, Orchestration & Cloud",
            "topics": [
                {
                    "name": "Containerization with Docker",
                    "description": "Package applications with Docker for consistent deployments.",
                    "subtopics": [
                        "Dockerfile creation and multi-stage builds",
                        "Docker Compose and networking",
                        "Volumes, image optimization, and container security",
                        "Private registries and image scanning"
                    ],
                    "tools": ["Docker", "Docker Compose", "Docker Hub"],
                    "recommended_projects": ["Containerize a Python/Node app with Docker and run multi-container setup"]
                },
                {
                    "name": "Container Orchestration with Kubernetes",
                    "description": "Deploy and manage containerized applications at scale.",
                    "subtopics": [
                        "Kubernetes architecture: pods, nodes, control plane",
                        "Deployments, services, and ingress controllers",
                        "ConfigMaps, Secrets, and namespaces",
                        "Scaling, rolling updates, and monitoring pods"
                    ],
                    "tools": ["Kubernetes", "Minikube", "kubectl", "Helm"],
                    "recommended_projects": ["Deploy a microservices app on Minikube using Helm charts"]
                },
                {
                    "name": "Cloud Platforms & Deployment",
                    "description": "Learn cloud-based deployment and infrastructure management.",
                    "subtopics": [
                        "AWS, GCP, Azure overview",
                        "Compute (EC2, Lambda, Cloud Run)",
                        "Storage (S3, Blob, GCS)",
                        "Networking, load balancers, DNS, SSL setup",
                        "Identity and access management (IAM)"
                    ],
                    "tools": ["AWS", "Azure", "GCP", "DigitalOcean"],
                    "recommended_projects": ["Host a containerized app on AWS ECS or Google Cloud Run"]
                }
            ]
        },
        {
            "phase": "Phase 4: Monitoring, Security & Advanced DevOps",
            "topics": [
                {
                    "name": "Monitoring & Logging",
                    "description": "Track performance and maintain reliability across systems.",
                    "subtopics": [
                        "Metrics, logs, and tracing basics",
                        "Prometheus and Grafana for observability",
                        "Centralized logging (ELK Stack)",
                        "Alerting and anomaly detection",
                        "SLOs, SLIs, and SLAs"
                    ],
                    "tools": ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
                    "recommended_projects": ["Set up dashboards monitoring a live app’s CPU and response times"]
                },
                {
                    "name": "DevSecOps & Security Practices",
                    "description": "Embed security into every stage of the DevOps pipeline.",
                    "subtopics": [
                        "OWASP DevSecOps best practices",
                        "Container image scanning and dependency checking",
                        "Secrets management (Vault, SOPS)",
                        "Network security groups and firewall management",
                        "Zero-trust architecture basics"
                    ],
                    "tools": ["HashiCorp Vault", "Snyk", "Trivy", "Aqua Security"],
                    "recommended_projects": ["Integrate a vulnerability scanner in a CI/CD pipeline"]
                },
                {
                    "name": "Site Reliability Engineering (SRE)",
                    "description": "Ensure system stability and performance through SRE principles.",
                    "subtopics": [
                        "Error budgets and incident response",
                        "Capacity planning and load testing",
                        "Chaos engineering fundamentals",
                        "Postmortems and reliability metrics"
                    ],
                    "tools": ["Gremlin", "K6", "PagerDuty"],
                    "recommended_projects": ["Simulate downtime with chaos testing and document mitigation plan"]
                },
                {
                    "name": "Career Growth & Advanced Topics",
                    "description": "Advance your DevOps expertise and career progression.",
                    "subtopics": [
                        "Building DevOps portfolios and certifications (AWS, Azure, CKAD)",
                        "Interview questions and system design prep",
                        "Cloud-native DevOps trends: GitOps, Platform Engineering",
                        "AI in DevOps and predictive monitoring"
                    ],
                    "tools": ["LinkedIn Learning", "Udemy", "KubeAcademy"],
                    "recommended_projects": ["Prepare a complete DevOps CI/CD demo with IaC and monitoring"]
                }
            ]
        }
    ]
}
