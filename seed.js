// seed.js
const mongoose = require("mongoose");
const Problem = require("./models/Problem");

// ✅ 54 problems array here:
const problems = [
    {
      
      title: "Medical Waste Management in Rural Areas",
      domain: "Healthcare",
      //icon: <Stethoscope className="w-5 h-5" />,
      description: "Unsafe disposal of medical waste threatens community health in underserved areas",
      background: "Rural healthcare facilities often lack proper medical waste disposal systems, leading to contamination and health risks. Current solutions are expensive and difficult to maintain.",
      existingSolutions: [
        "Centralized waste collection services (expensive, infrequent)",
        "Basic incineration (environmental concerns, incomplete sterilization)", 
        "Chemical treatment systems (high maintenance, chemical disposal issues)"
      ],
      limitations: [
        "High operational costs make solutions unsustainable",
        "Complex maintenance requirements exceed local capabilities",
        "Irregular collection schedules create waste accumulation",
        "Environmental impact of current disposal methods"
      ],
      category: "healthcare"
    },
    {
      
      title: "Urban Air Quality Monitoring",
      domain: "Environment",
      //icon: <Leaf className="w-5 h-5" />,
      description: "Cities need more granular, real-time air quality data to protect public health",
      background: "Current air quality monitoring relies on sparse, expensive stations that prov_ide limited coverage. Citizens lack access to hyperlocal air quality data.",
      existingSolutions: [
        "Government monitoring stations (limited coverage, expensive)",
        "Mobile air quality apps (rely on sparse data)",
        "Consumer air quality devices (inconsistent accuracy)"
      ],
      limitations: [
        "Monitoring stations cover large areas, missing pollution hotspots",
        "Data updates are infrequent and may not reflect real-time conditions",
        "Consumer devices lack standardization and calibration",
        "High costs prevent w_idespread deployment"
      ],
      category: "environment"
    },
    {
      
      title: "Digital Accessibility in E-commerce",
      domain: "Accessibility",
      //icon: <Accessibility className="w-5 h-5" />,
      description: "Online shopping remains challenging for users with disabilities",
      background: "Despite accessibility gu_idelines, many e-commerce sites fail to prov_ide inclusive experiences for users with visual, hearing, or motor impairments.",
      existingSolutions: [
        "Screen reader compatibility (often incomplete)",
        "Accessibility browser extensions (band-a_id solutions)",
        "Alternative accessible shopping platforms (limited product selection)"
      ],
      limitations: [
        "Compliance is often superficial, missing nuanced user needs",
        "Solutions are reactive rather than built-in from design phase",
        "Testing is limited and doesn't reflect real user experiences",
        "Economic incentives don't prioritize accessibility improvements"
      ],
      category: "accessibility"
    },
    {
      
      title: "Digital Div_ide in Rural Internet Access",
      domain: "Public Services",
      //icon: <Wifi className="w-5 h-5" />,
      description: "Rural communities lack reliable, affordable high-speed internet connectivity",
      background: "Many rural areas struggle with poor internet infrastructure, limiting access to education, healthcare, and economic opportunities. Traditional broadband expansion is costly and slow.",
      existingSolutions: [
        "Satellite internet (high latency, weather dependent)",
        "Fixed wireless broadband (limited range, terrain challenges)",
        "Government broadband initiatives (slow rollout, bureaucratic delays)"
      ],
      limitations: [
        "Infrastructure costs are prohibitive for sparse populations",
        "Geographic barriers make traditional solutions impractical",
        "Service prov_iders lack economic incentives for rural expansion",
        "Existing solutions often prov_ide inadequate speeds or reliability"
      ],
      category: "public-services"
    },
    {
      
      title: "Cybersecurity for Small Healthcare Practices",
      domain: "Healthcare",
      //icon: <Shield className="w-5 h-5" />,
      description: "Small medical practices are vulnerable to cyber attacks but lack resources for proper security",
      background: "Small healthcare prov_iders handle sensitive patient data but often lack the budget and expertise for comprehensive cybersecurity measures. They're increasingly targeted by ransomware attacks.",
      existingSolutions: [
        "Enterprise security software (too expensive, overly complex)",
        "Basic antivirus solutions (insufficient for healthcare compliance)",
        "Managed security services (costly, one-size-fits-all approach)"
      ],
      limitations: [
        "Solutions designed for large enterprises don't fit small practice budgets",
        "Complex security tools require dedicated IT staff that small practices can't afford",
        "Compliance requirements (HIPAA) are difficult to navigate without expertise",
        "Staff training on security protocols is often inadequate or non-existent"
      ],
      category: "healthcare"
    },
    {
      
      title: "Educational Resource Access in Underserved Communities",
      domain: "Education",
      //icon: <BookOpen className="w-5 h-5" />,
      description: "Students in low-income areas lack access to quality educational materials and technology",
      background: "Educational inequality persists as students in underserved communities face barriers to accessing books, technology, and supplementary learning resources that enhance academic performance.",
      existingSolutions: [
        "One-laptop-per-child programs (hardware focus, limited software/content)",
        "Public library computer access (limited hours, shared resources)",
        "Donated textbook programs (outdated materials, inconsistent availability)"
      ],
      limitations: [
        "Hardware-focused solutions ignore content and connectivity needs",
        "Static resources don't adapt to indiv_idual learning styles or paces",
        "Limited internet access restricts online educational opportunities",
        "Language barriers often exclude non-English speaking communities"
      ],
      category: "education"
    },
    {
      
      title: "Senior Housing Navigation and Support",
      domain: "Public Services",
      //icon: <Home className="w-5 h-5" />,
      description: "Elderly indiv_iduals struggle to find appropriate, affordable housing options",
      background: "Aging populations face complex decisions about housing transitions, from independent living to assisted care. The process is overwhelming, with limited gu_idance and fragmented information.",
      existingSolutions: [
        "Housing placement agencies (expensive, limited personalization)",
        "Government housing assistance programs (long wait lists, complex bureaucracy)",
        "Family-based research and decision making (time-intensive, emotionally stressful)"
      ],
      limitations: [
        "Information is scattered across multiple sources and difficult to compare",
        "Financial planning tools don't integrate with housing options",
        "Limited transparency in quality ratings and res_ident satisfaction",
        "Geographic constraints limit options for staying near family and community"
      ],
      category: "public-services"
    },
    {
      
      title: "Public Transportation Accessibility",
      domain: "Accessibility",
      //icon: <Car className="w-5 h-5" />,
      description: "Public transit systems fail to serve people with mobility, visual, and cognitive disabilities",
      background: "Despite ADA compliance, public transportation remains challenging for people with disabilities. Real-time accessibility information is often unavailable or inaccurate.",
      existingSolutions: [
        "Paratransit services (limited schedules, advance booking required)",
        "Mobile apps with accessibility features (incomplete data, unreliable)",
        "Audio announcements and visual displays (inconsistent implementation)"
      ],
      limitations: [
        "Real-time accessibility status is rarely available",
        "Integration between different transit systems is poor",
        "Backup options when accessible features fail are inadequate",
        "User feedback mechanisms for reporting accessibility issues are limited"
      ],
      category: "accessibility"
    },
    {
      
      title: "Food Waste Reduction in Restaurants",
      domain: "Environment",
      //icon: <Utensils className="w-5 h-5" />,
      description: "Restaurants generate massive food waste while communities face food insecurity",
      background: "Food service establishments discard tons of edible food daily due to overproduction, aesthetic standards, and regulatory concerns, while local food banks struggle to meet demand.",
      existingSolutions: [
        "Food donation apps (liability concerns, logistical challenges)",
        "Composting programs (limited availability, transportation costs)",
        "Inventory management systems (focus on purchasing, not waste reduction)"
      ],
      limitations: [
        "Legal liability concerns discourage food donation",
        "Coordination between restaurants and food recovery organizations is complex",
        "Food safety regulations create barriers to redistribution",
        "Lack of real-time matching between surplus food and need"
      ],
      category: "environment"
    },
    {
      
      title: "Mental Health Support in Educational Settings",
      domain: "Education",
      //icon: <Heart className="w-5 h-5" />,
      description: "Students face increasing mental health challenges with inadequate school-based support",
      background: "Rising rates of anxiety, depression, and stress among students overwhelm school counseling resources. Early intervention and ongoing support systems are insufficient to meet growing demand.",
      existingSolutions: [
        "School counseling services (understaffed, crisis-focused)",
        "Mental health apps for students (generic, lack school integration)",
        "External therapy referrals (expensive, long wait times, stigma)"
      ],
      limitations: [
        "Counselor-to-student ratios are too high for meaningful indiv_idual attention",
        "Crisis intervention focus leaves little time for preventive care",
        "Privacy concerns limit information sharing between school and external prov_iders",
        "Mental health literacy among teachers and staff is insufficient"
      ],
      category: "education"
    },
    {
      
      title: "AI Bias Detection in Hiring Systems",
      domain: "Machine Learning",
      //icon: <Brain className="w-5 h-5" />,
      description: "Automated hiring systems exhibit bias against certain demographic groups",
      background: "AI-powered recruitment tools are increasingly used to screen cand_idates, but many exhibit unconscious bias, perpetuating discrimination in hiring processes. These systems often favor certain demographics while unfairly screening out qualified cand_idates.",
      existingSolutions: [
        "Basic fairness metrics in ML models (limited scope, post-hoc detection)",
        "Diverse training datasets (expensive to curate, still biased)",
        "Human oversight processes (inconsistent, time-intensive)"
      ],
      limitations: [
        "Current bias detection methods are reactive rather than preventive",
        "Training data often reflects historical biases",
        "Complex interactions between multiple bias types are hard to detect",
        "Lack of standardized metrics for measuring fairness in hiring"
      ],
      category: "machine-learning"
    },
    {
      
      title: "Real-time Fraud Detection for Small E-commerce",
      domain: "Machine Learning",
      //icon: <ShoppingCart className="w-5 h-5" />,
      description: "Small online retailers lack affordable, effective fraud detection systems",
      background: "Small e-commerce businesses face significant losses from fraudulent transactions but cannot afford enterprise-level fraud detection systems. Current solutions are either too expensive or prov_ide inadequate protection.",
      existingSolutions: [
        "Rule-based fraud detection (high false positives, easy to circumvent)",
        "Third-party fraud services (expensive, one-size-fits-all)",
        "Manual transaction review (time-intensive, inconsistent)"
      ],
      limitations: [
        "Enterprise solutions are too costly for small businesses",
        "Generic models don't adapt to specific business patterns",
        "High false positive rates disrupt legitimate customers",
        "Limited integration with existing e-commerce platforms"
      ],
      category: "ecommerce"
    },
    {
      
      title: "Personalized Learning Path Optimization",
      domain: "AI",
      //icon: <Brain className="w-5 h-5" />,
      description: "Educational platforms fail to adapt learning paths to indiv_idual student needs",
      background: "Online learning platforms use generic curricula that don't adapt to indiv_idual learning styles, pace, or knowledge gaps. Students often struggle with content that's too advanced or get bored with material that's too basic.",
      existingSolutions: [
        "Adaptive learning platforms (expensive, limited customization)",
        "Manual placement tests (static, don't evolve with learner)",
        "Teacher-directed personalization (resource-intensive, subjective)"
      ],
      limitations: [
        "Most systems adapt slowly and don't account for learning style preferences",
        "Limited integration between assessment and content delivery",
        "Lack of real-time adjustment based on engagement and performance",
        "Insufficient data on optimal learning sequences for different topics"
      ],
      category: "ai"
    },
    {
      
      title: "Inventory Optimization for Seasonal Businesses",
      domain: "E-commerce",
      //icon: <ShoppingCart className="w-5 h-5" />,
      description: "Seasonal retailers struggle with inventory planning and waste reduction",
      background: "Businesses with seasonal demand patterns face challenges in inventory management, often overordering (leading to waste) or underordering (missing sales opportunities). Traditional inventory systems don't handle seasonal variability well.",
      existingSolutions: [
        "Traditional ERP systems (poor seasonal forecasting)",
        "Manual spreadsheet planning (error-prone, time-intensive)",
        "Basic analytics tools (limited predictive capabilities)"
      ],
      limitations: [
        "Historical data alone doesn't account for market changes",
        "Weather and external factors significantly impact seasonal demand",
        "Integration with supplier systems is often poor",
        "Lack of real-time adjustment capabilities during season"
      ],
      category: "ecommerce"
    },
    {
      
      title: "Code Review Automation for Development Teams",
      domain: "Software Engineering",
      //icon: <Code className="w-5 h-5" />,
      description: "Manual code reviews are time-intensive and inconsistent across development teams",
      background: "Software development teams spend significant time on code reviews, which are often inconsistent in quality and thoroughness. Automated tools exist but lack context understanding and generate too many false positives.",
      existingSolutions: [
        "Static analysis tools (high false positives, miss context issues)",
        "Manual peer reviews (time-intensive, inconsistent quality)",
        "Basic linting tools (syntax-focused, miss architectural issues)"
      ],
      limitations: [
        "Current tools focus on syntax rather than design patterns and best practices",
        "Lack of team-specific customization and learning",
        "Integration with existing development workflows is poor",
        "Difficulty in prioritizing issues by actual impact on code quality"
      ],
      category: "software-engineering"
    },
    {
  
  title: "Personalized Tutoring System",
  domain: "AI",
  //icon: <Brain className="w-5 h-5" />,
  description: "AI-powered platform that adapts learning materials based on indiv_idual student performance.",
  background: "Traditional tutoring systems struggle to tailor content dynamically. AI can personalize learning paths for each student by tracking progress and learning style.",
  existingSolutions: [
    "Pre-built adaptive learning platforms",
    "Static quizzes with predefined branching",
    "Manual content recommendation by teachers"
  ],
  limitations: [
    "Lack of real-time personalization",
    "Limited support for multiple learning styles",
    "Manual systems can't scale effectively"
  ],
  category: "ai"
},
{
  
  title: "Recyclable vs Non-Recyclable Image Classifier",
  domain: "Machine Learning",
  //icon: <Brain className="w-5 h-5" />,
  description: "A vision-based classifier to help users sort recyclable and non-recyclable waste.",
  background: "Misclassification of waste leads to recycling inefficiencies. Image classification using ML can automate this and reduce errors in disposal.",
  existingSolutions: [
    "Manual sorting gu_idelines on bins",
    "Barcode-based recycling apps",
    "Generic waste _identification tools"
  ],
  limitations: [
    "Lack of real-time classification",
    "Low user engagement with manual apps",
    "Barcode reliance limits usability for unpackaged items"
  ],
  category: "machine-learning"
},
{
  
  title: "AI-Based Cyberharassment Detection",
  domain: "AI",
  //icon: <Shield className="w-5 h-5" />,
  description: "Detects cyberbullying and offensive language in social media using NLP models.",
  background: "Online platforms are struggling with increasing toxic content. AI can detect and flag harmful content at scale.",
  existingSolutions: [
    "Manual moderation by platform staff",
    "Basic keyword filters",
    "User reporting systems"
  ],
  limitations: [
    "Manual moderation doesn't scale",
    "Keyword filters lack context sensitivity",
    "User reports delay action"
  ],
  category: "ai"
},
{
  
  title: "Fake News & Deepfake Detection",
  domain: "AI",
  //icon: <Shield className="w-5 h-5" />,
  description: "Detects manipulated content using AI models trained on misinformation patterns.",
  background: "Fake news and deepfakes pose major threats to public trust. AI can learn from known patterns to flag such content in real-time.",
  existingSolutions: [
    "Manual fact-checking websites",
    "Crowdsourced verification tools",
    "Browser extensions for misinformation alerts"
  ],
  limitations: [
    "Fact-checking is slow and reactive",
    "Extensions depend on user installation",
    "Current tools struggle with visual deepfakes"
  ],
  category: "ai"
},
{
  
  title: "Smart Health Assistant",
  domain: "AI",
  //icon: <Heart className="w-5 h-5" />,
  description: "Monitors user metrics (like sleep, heart rate, stress) and offers lifestyle advice using AI.",
  background: "Users track health data via wearables but lack insights or actionable feedback. AI can br_idge this by analyzing trends and gu_iding improvements.",
  existingSolutions: [
    "Fitness bands with basic health tracking",
    "Manual health logging apps",
    "Appointment-based dietician consultations"
  ],
  limitations: [
    "Limited contextual suggestions",
    "Lack of personalized lifestyle planning",
    "No proactive recommendations based on patterns"
  ],
  category: "ai"
},
{
  
  title: "Smart Campus Navigation for Accessibility",
  domain: "Accessibility",
  //icon: <Accessibility className="w-5 h-5" />,
  description: "Assists visually or physically impaired students in navigating campuses.",
  background: "Campuses often lack real-time gu_idance systems for students with disabilities. AI-enhanced tools can prov_ide auditory directions and alerts.",
  existingSolutions: [
    "Static printed maps",
    "Volunteer support from campus staff",
    "Basic campus apps with limited accessibility focus"
  ],
  limitations: [
    "Not adaptive to route changes or construction",
    "Limited real-time data",
    "No personalized gu_idance for different impairments"
  ],
  category: "accessibility"
},
{
  
  title: "Smart Inventory Forecasting for Campus Stores",
  domain: "Machine Learning",
  //icon: <ShoppingCart className="w-5 h-5" />,
  description: "Predicts demand for products based on student behavior and seasonality.",
  background: "University stores often overstock or understock items. ML models can predict buying patterns to optimize stock levels.",
  existingSolutions: [
    "Manual inventory logs",
    "Generic inventory management software",
    "Excel-based seasonal forecasts"
  ],
  limitations: [
    "Lack of dynamic adjustments",
    "Doesn't cons_ider academic calendars/events",
    "High manual overhead"
  ],
  category: "machine-learning"
},
{
  
  title: "AR Product Visualization in E-commerce",
  domain: "E-commerce",
  //icon: <ShoppingCart className="w-5 h-5" />,
  description: "AR-powered preview of products like furniture, wearables, etc., in users' environments.",
  background: "Customers struggle to imagine how a product will look or fit in their space. AR br_idges the gap between online browsing and real-world context.",
  existingSolutions: [
    "Static product images",
    "Zoomable image galleries",
    "Product dimension listings"
  ],
  limitations: [
    "Lack of interactivity",
    "Low engagement compared to immersive previews",
    "No context-based fit visualization"
  ],
  category: "ecommerce"
},
{
  
  title: "Voice Assistant for the Visually Impaired",
  domain: "AI",
  //icon: <Accessibility className="w-5 h-5" />,
  description: "Helps visually impaired indiv_iduals interact with devices and apps using voice commands.",
  background: "Most apps are visual-first, making it hard for visually impaired users to engage fully. A voice-first AI assistant can improve accessibility.",
  existingSolutions: [
    "Screen readers",
    "Voice-over features in iOS/Andro_id",
    "Basic voice commands in digital assistants"
  ],
  limitations: [
    "Lack of contextual awareness",
    "Limited support for app-specific features",
    "Not customizable to user needs"
  ],
  category: "ai"
},
{
  
  title: "Homework Drafting Assistant with Integrity Monitoring",
  domain: "AI",
  //icon: <Brain className="w-5 h-5" />,
  description: "An assistant that helps draft assignments but flags plagiarism or improper use.",
  background: "Students often use AI tools to write assignments, raising academic integrity concerns. A gu_ided assistant can help them learn without compromising originality.",
  existingSolutions: [
    "Generic AI chatbots for content generation",
    "Plagiarism detection tools",
    "Manual supervision by teachers"
  ],
  limitations: [
    "Lack of educational gu_idance while writing",
    "No real-time integrity checks during drafting",
    "Separate tools for writing and val_idation"
  ],
  category: "ai"
},
{
  
  title: "Gamified Mental Wellness App",
  domain: "Software Engineering",
  //icon: <Heart className="w-5 h-5" />,
  description: "App that helps students manage stress using gamified mental health exercises.",
  background: "Mental health support is often passive or stigmatized. Gamification encourages users to actively engage in wellness routines.",
  existingSolutions: [
    "Meditation and mindfulness apps",
    "Journaling apps for mood tracking",
    "Therapist-based solutions"
  ],
  limitations: [
    "Lack of long-term engagement",
    "Generic content not tailored to students",
    "No real-time motivation or rewards"
  ],
  category: "software-engineering"
},
{
  
  title: "Progressive Web App for Local Farmers",
  domain: "E-commerce",
  //icon: <ShoppingCart className="w-5 h-5" />,
  description: "Helps local farmers list and sell products online with minimal tech knowledge.",
  background: "Farmers face challenges with digital access and tech literacy. A lightweight, PWA-based e-commerce tool enables direct-to-consumer sales easily.",
  existingSolutions: [
    "Agri marketplaces (require training)",
    "WhatsApp-based group selling",
    "Intermediary-led distribution networks"
  ],
  limitations: [
    "High dependency on m_iddlemen",
    "Mobile-unfriendly portals",
    "No real-time inventory or price updates"
  ],
  category: "ecommerce"
},
{
  
  title: "Disaster Response Chatbot",
  domain: "Public Services",
  //icon: <Shield className="w-5 h-5" />,
  description: "Conversational bot that gives verified instructions during floods, earthquakes, etc.",
  background: "During disasters, information is scattered or unreliable. A chatbot can deliver localized instructions and support in real-time.",
  existingSolutions: [
    "Emergency SMS alerts",
    "News updates and radio broadcasts",
    "Government apps for disaster management"
  ],
  limitations: [
    "Lack of interactivity and personalization",
    "Delay in updates reaching indiv_iduals",
    "Not multilingual or inclusive"
  ],
  category: "public-services"
},
{
  
  title: "Fake Review Detection System",
  domain: "E-commerce",
  //icon: <ShoppingCart className="w-5 h-5" />,
  description: "ML tool that _identifies suspicious or bot-generated product reviews.",
  background: "E-commerce platforms suffer from misleading reviews which impact customer trust. Detecting fake reviews early improves transparency.",
  existingSolutions: [
    "User flagging systems",
    "Basic spam filters",
    "Verified purchase badges"
  ],
  limitations: [
    "Can't detect AI-generated reviews",
    "Reactive rather than preventive",
    "Bias against new sellers"
  ],
  category: "ecommerce"
},
{
  
  title: "Plastic Pollution Detection via Satellite",
  domain: "Environment",
  //icon: <Leaf className="w-5 h-5" />,
  description: "ML-based detection of plastic waste accumulation in oceans and rivers via satellite imagery.",
  background: "Plastic pollution is hard to track at scale. AI-enhanced imagery analysis allows for faster cleanup decisions.",
  existingSolutions: [
    "Manual water sampling",
    "Aerial drone surveys",
    "NGO-led cleanup reports"
  ],
  limitations: [
    "Limited coverage and delay in reporting",
    "Resource-heavy operations",
    "No automated pattern detection"
  ],
  category: "environment"
},
{
  
  title: "Water Level Prediction for Rural Safety",
  domain: "Environment",
  //icon: <Leaf className="w-5 h-5" />,
  description: "Uses IoT sensors and ML models to predict dangerous rises in water levels.",
  background: "Flooding in rural areas often results in loss of life and property. Early warnings can drastically reduce risks.",
  existingSolutions: [
    "Government flood alerts",
    "Weather app-based predictions",
    "Community messaging systems"
  ],
  limitations: [
    "Delayed communication",
    "No hyperlocal sensor integration",
    "Lack of predictive analytics"
  ],
  category: "environment"
},
{
  
  title: "Energy Usage Predictor for Smart Dorms",
  domain: "AI",
  //icon: <Brain className="w-5 h-5" />,
  description: "Predicts dorm electricity usage based on student behavior and appliance data.",
  background: "Dorms waste significant energy due to inefficient use patterns. Predictive AI can suggest optimizations and improve sustainability.",
  existingSolutions: [
    "Manual switch-off campaigns",
    "Smart meters for billing",
    "General power-saving awareness posters"
  ],
  limitations: [
    "No personalization",
    "No real-time feedback",
    "Lack of appliance-level monitoring"
  ],
  category: "ai"
},
{
  
  title: "Open-source Static Code Analyzer",
  domain: "Software Engineering",
  //icon: <Code className="w-5 h-5" />,
  description: "Tool that checks for common bugs and security issues in student-written code.",
  background: "Students often submit buggy code without knowing best practices. A custom analyzer helps teach while improving submission quality.",
  existingSolutions: [
    "ESLint, SonarQube",
    "University plagiarism checkers",
    "Code linters for _idEs"
  ],
  limitations: [
    "Not student-focused",
    "Generic feedback without learning tips",
    "Doesn’t integrate with learning platforms"
  ],
  category: "software-engineering"
},
{
  
  title: "Spam Filter for Student Email Accounts",
  domain: "Machine Learning",
  //icon: <Shield className="w-5 h-5" />,
  description: "ML-based email filter for detecting phishing, scams, or spam in student inboxes.",
  background: "Student emails are often targets for scams and spam. Traditional filters are generic and lack educational sensitivity.",
  existingSolutions: [
    "Gmail/Outlook spam filters",
    "Manual phishing awareness workshops",
    "Static keyword filters"
  ],
  limitations: [
    "Not tailored to student context",
    "Fails to detect targeted scam patterns",
    "No learning/adaptive behavior"
  ],
  category: "machine-learning"
},
{
  
  title: "AR-Based Navigation for Public Buildings",
  domain: "Accessibility",
  //icon: <Accessibility className="w-5 h-5" />,
  description: "Augmented reality overlays to gu_ide users through complex public spaces like hospitals or campuses.",
  background: "People with visual or cognitive challenges struggle in large buildings. AR navigation improves conf_idence and accessibility.",
  existingSolutions: [
    "Signage and floor maps",
    "Volunteer-based assistance",
    "Static indoor maps in apps"
  ],
  limitations: [
    "Not adaptive or personalized",
    "No real-time redirection",
    "Lack of accessibility-friendly design"
  ],
  category: "accessibility"
},
{
  
  title: "Real-Time Price Optimization for Online Sellers",
  domain: "E-commerce",
  //icon: <ShoppingCart className="w-5 h-5" />,
  description: "AI adjusts product pricing in real-time based on market trends and competitor analysis.",
  background: "Small sellers struggle to compete with dynamic pricing used by big platforms. AI br_idges this competitive gap.",
  existingSolutions: [
    "Manual price tracking",
    "Basic pricing rules in seller dashboards",
    "Promotional campaigns"
  ],
  limitations: [
    "Reactive instead of proactive",
    "Doesn’t cons_ider competitor actions",
    "No automated insights"
  ],
  category: "ecommerce"
},
{
  
  title: "Low-Code Builder for Educational Apps",
  domain: "Software Engineering",
  //icon: <Code className="w-5 h-5" />,
  description: "Drag-and-drop tool to help students build learning apps without coding knowledge.",
  background: "Students or educators with limited coding skills struggle to prototype _ideas. A visual builder makes it easier to launch solutions.",
  existingSolutions: [
    "Thunkable, MIT App Inventor",
    "Google Forms for quizzes",
    "Manual coding in React/Flutter"
  ],
  limitations: [
    "Not tailored for education",
    "Limited control over learning logic",
    "No AI-enhanced templates"
  ],
  category: "software-engineering"
},
{
  
  title: "Chatbot for New Student Onboarding",
  domain: "AI",
  //icon: <Users className="w-5 h-5" />,
  description: "Multilingual assistant that helps new students navigate courses, hostel info, and college life.",
  background: "Freshers often feel overwhelmed. A 24/7 smart assistant improves onboarding and reduces anxiety.",
  existingSolutions: [
    "Orientation handbooks",
    "Senior mentoring groups",
    "College websites and FAQs"
  ],
  limitations: [
    "No personalization",
    "Outdated or hard-to-navigate info",
    "Language barriers"
  ],
  category: "ai"
},
{
  
  title: "Predictive Maintenance for Campus Infrastructure",
  domain: "Machine Learning",
  //icon: <Building className="w-5 h-5" />,
  description: "Monitors equipment/facility health to predict breakdowns before they occur.",
  background: "Universities suffer disruptions due to delayed facility maintenance. Predictive ML helps plan ahead.",
  existingSolutions: [
    "Scheduled maintenance logs",
    "Manual complaint systems",
    "Annual audits"
  ],
  limitations: [
    "Doesn’t detect early failure symptoms",
    "Reactive rather than proactive",
    "No automation of repair workflows"
  ],
  category: "machine-learning"
},
{
  
  title: "Course Assignment Optimization",
  domain: "Machine Learning",
  //icon: <BookOpen className="w-5 h-5" />,
  description: "ML-powered scheduling system that matches students to preferred courses without overload.",
  background: "Course registration often causes stress. Optimized assignment reduces clashes and waitlists.",
  existingSolutions: [
    "First-come-first-serve systems",
    "Manual adjustment after allocation",
    "Fixed batch assignment"
  ],
  limitations: [
    "Doesn’t reflect student preferences",
    "Static and hard to scale",
    "Ignores academic workload balance"
  ],
  category: "machine-learning"
},
{
  
  title: "Context-Aware Plagiarism Checker",
  domain: "AI",
  //icon: <Brain className="w-5 h-5" />,
  description: "Detects not just copied content, but _idea plagiarism in projects and assignments.",
  background: "Conventional plagiarism checkers don’t catch smart paraphrasing or reused logic. Contextual AI helps uphold academic integrity.",
  existingSolutions: [
    "Turnitin",
    "Simple text-matching tools",
    "Manual teacher review"
  ],
  limitations: [
    "Surface-level checking",
    "Easy to trick with paraphrasing",
    "Doesn’t analyze code or logic structure"
  ],
  category: "ai"
},
{
  
  title: "AI Quiz Generator from Class Notes",
  domain: "AI",
  //icon: <BookOpen className="w-5 h-5" />,
  description: "Generates quizzes from lecture notes or PDFs to a_id revision.",
  background: "Manual quiz creation takes time. AI saves effort and makes custom tests based on actual learning material.",
  existingSolutions: [
    "Manual quiz tools",
    "Quizlet flashcards",
    "PDF summarizers"
  ],
  limitations: [
    "Static and limited to text",
    "No learning level detection",
    "Hard to adapt per student"
  ],
  category: "ai"
},
{
  
  title: "Electricity Usage Optimizer for Dorms",
  domain: "Environment",
  //icon: <Leaf className="w-5 h-5" />,
  description: "Tracks and suggests energy-saving changes in dorm rooms based on real-time usage.",
  background: "Hostel energy bills can be high. AI can track and give daily tips to help students form sustainable habits.",
  existingSolutions: [
    "Energy awareness posters",
    "Smart meters (billing only)",
    "Basic device-level timers"
  ],
  limitations: [
    "Lack of feedback or suggestions",
    "Not linked to student usage patterns",
    "No community benchmarking"
  ],
  category: "environment"
},
{
  
  title: "Personal Finance Manager for Students",
  domain: "Software Engineering",
  //icon: <Code className="w-5 h-5" />,
  description: "Helps students track expenses, plan budgets, and manage college finances with visual insights.",
  background: "Students often overspend or lose track of small transactions. A simple, visual finance tracker can help build money skills early.",
  existingSolutions: [
    "Generic finance apps like Mint",
    "Manual Excel sheets",
    "Parental control banking"
  ],
  limitations: [
    "Too complex for student use",
    "No gamification or reminders",
    "No academic calendar awareness"
  ],
  category: "software-engineering"
},
{
  
  title: "Gamified Mental Wellness App for Students",
  domain: "Software Engineering",
  //icon: <Heart className="w-5 h-5" />,
  description: "Encourages mental health routines through game mechanics, streaks, and rewards.",
  background: "Students often ignore wellness advice. A gamified app increases motivation for journaling, meditation, and daily check-ins.",
  existingSolutions: [
    "Calm, Headspace apps (premium, generic)",
    "Mental health PDFs and seminars",
    "Social media mental health pages"
  ],
  limitations: [
    "Lack of personalization",
    "Low daily engagement",
    "Not student-context aware"
  ],
  category: "software-engineering"
},
{
  
  title: "AI-Powered Sentiment Analysis for Class Feedback",
  domain: "AI",
  //icon: <Brain className="w-5 h-5" />,
  description: "Analyzes open-ended student reviews to highlight actionable insights for teachers.",
  background: "Feedback forms often have generic ratings. AI can process free-text responses and uncover emotional tone.",
  existingSolutions: [
    "Rating-based feedback forms",
    "Manual analysis of comments",
    "Basic text keyword analysis"
  ],
  limitations: [
    "Misses tone and context",
    "Tiring for staff to read all",
    "No dashboard to view trends"
  ],
  category: "ai"
},
{
  
  title: "Homework Drafting Assistant with Plagiarism Monitoring",
  domain: "AI",
  //icon: <Code className="w-5 h-5" />,
  description: "Assists students in writing homework while alerting them to originality concerns in real-time.",
  background: "Many students unintentionally plagiarize due to pressure or confusion. AI gu_idance encourages learning while ensuring integrity.",
  existingSolutions: [
    "Grammarly, Quillbot (for grammar/paraphrasing)",
    "Plagiarism checkers (after submission)",
    "Manual teacher advice"
  ],
  limitations: [
    "No draft-phase integrity feedback",
    "Doesn’t encourage self-improvement",
    "Lack of real-time checking"
  ],
  category: "ai"
},
{
  
  title: "Disaster Response Chatbot for Local Communities",
  domain: "Public Services",
  //icon: <Shield className="w-5 h-5" />,
  description: "Answers FAQs and prov_ides emergency protocols during natural disasters or power outages.",
  background: "Citizens panic during disasters due to lack of timely info. A local chatbot can give verified alerts and step-by-step help.",
  existingSolutions: [
    "Government helplines",
    "News channels",
    "Whatsapp forwards"
  ],
  limitations: [
    "Slow response time",
    "Language accessibility missing",
    "Misinformation risk"
  ],
  category: "public-services"
},
{
  
  title: "Locust Swarm Prediction Using Satellite & ML",
  domain: "Environment",
  //icon: <Leaf className="w-5 h-5" />,
  description: "Predicts possible locust attacks in agricultural zones using weather and satellite data.",
  background: "Locusts destroy crops worth millions. Early detection helps farmers prepare or spray safely.",
  existingSolutions: [
    "Manual field inspection",
    "Basic weather alerts",
    "Government notices"
  ],
  limitations: [
    "Delayed alerts",
    "Poor rural connectivity",
    "No AI-based trajectory prediction"
  ],
  category: "environment"
},
{
  
  title: "Planned Water Usage Alerts for Campuses",
  domain: "Environment",
  //icon: <Leaf className="w-5 h-5" />,
  description: "Notifies users about peak hours and recommended water-saving actions.",
  background: "College hostels overuse water during peak morning times. Alerts and planning can avo_id waste and maintain supply.",
  existingSolutions: [
    "Awareness posters",
    "Sensor taps",
    "Manual scheduling for laundry/washing"
  ],
  limitations: [
    "Not personalized or predictive",
    "No reward mechanism",
    "Can't track leaks or wastage"
  ],
  category: "environment"
},
{
  
  title: "Voice-Controlled Smart Shopping Assistant",
  domain: "E-commerce",
  //icon: <ShoppingCart className="w-5 h-5" />,
  description: "Lets users search and compare products using only voice, tailored for mobile-first experience.",
  background: "Typing on mobile is slow for many. Voice input makes shopping more accessible, especially for visually impaired users.",
  existingSolutions: [
    "Voice search on Amazon (basic)",
    "Google Assistant (not optimized for e-com)",
    "Text-based filters"
  ],
  limitations: [
    "Doesn't support comparisons",
    "No multi-lingual context",
    "Lacks personalization"
  ],
  category: "ecommerce"
},
{
  
  title: "Open-Source Static Code Analyzer for Students",
  domain: "Software Engineering",
  //icon: <Code className="w-5 h-5" />,
  description: "Analyzes code quality and suggests improvements in beginner projects.",
  background: "Students often don’t know best practices or security pitfalls. A lightweight analyzer teaches clean code early.",
  existingSolutions: [
    "ESLint, SonarQube (complex for beginners)",
    "Code review by mentors",
    "Manual style gu_ide checks"
  ],
  limitations: [
    "Not tailored for education",
    "Hard to set up locally",
    "Too strict for simple projects"
  ],
  category: "software-engineering"
},
{
  
  title: "Campus Study Group Matcher",
  domain: "Education",
  //icon: <BookOpen className="w-5 h-5" />,
  description: "Matches students with similar academic goals and time availability into study pods.",
  background: "Peer-based learning boosts outcomes. Students struggle to form consistent groups due to schedule clashes or social gaps.",
  existingSolutions: [
    "WhatsApp groups",
    "Random buddy systems",
    "Manual coordination"
  ],
  limitations: [
    "Doesn't scale",
    "Lack of matching algorithm",
    "No calendar integration"
  ],
  category: "education"
},
{
  
  title: "Progressive Web App for Local Farmers’ Markets",
  domain: "E-commerce",
  //icon: <ShoppingCart className="w-5 h-5" />,
  description: "Helps small farmers list and sell produce directly to nearby consumers online.",
  background: "Farmers depend on m_iddlemen. A lightweight app enables better profits and urban-rural connection.",
  existingSolutions: [
    "WhatsApp selling",
    "Offline mandis",
    "Govt-run eNAM (low usage)"
  ],
  limitations: [
    "No real-time availability updates",
    "Not mobile-friendly",
    "Poor discoverability"
  ],
  category: "ecommerce"
}




    
  ];

async function seedDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/evolve");
  await Problem.deleteMany(); // Optional: clears existing data
  await Problem.insertMany(problems);
  console.log("Database seeded with problems ✅");
  mongoose.disconnect();
}

seedDB();

console.log("✅ Seed data inserted successfully!");