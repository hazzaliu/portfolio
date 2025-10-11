import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from a database or CMS
const blogPosts = {
  "moving-lake": {
    title: "Moving Lake: Integrating Legacy Technology and Developing New Features",
    headerImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/movinglake.jpg-DgdR0Rro26b57BB3aKF2FfDzWIS2eg.jpeg",
    content: `
      <p>My experience at Moving Lake was a pivotal phase in my career, where I worked on integrating and adapting legacy technology from Casai while continuously developing new features and enhancing visual design for client platforms. For approximately a year, I took on an integral role that spanned backend and frontend development while also leading technical aspects related to project quality and delivery.</p>

      <h2>Project 1: Vacation Rental System Legacy from Casai</h2>
      <p>After acquiring technology from Casai, my primary responsibility was to migrate and adapt the vacation rental system to Moving Lake's infrastructure. This project involved two global clients:</p>
      <ul>
        <li>Kenya and Tanzania: Collaborated with a client to expand vacation rental operations in Africa.</li>
        <li>Argentina: Another client aimed to implement the system in Mexico and Argentina.</li>
      </ul>

      <h3>My contributions included:</h3>
      <h4>Frontend:</h4>
      <ul>
        <li>Refactoring the web system developed with:
          <ul>
            <li>React and Styled Components.</li>
            <li>TypeScript and Webpack.</li>
          </ul>
        </li>
        <li>Implementing visual and usability improvements to align the system with client expectations.</li>
      </ul>

      <h4>Backend:</h4>
      <ul>
        <li>Developing and maintaining the backend using Django, ensuring seamless integration with the frontend.</li>
      </ul>

      <h4>Project Management:</h4>
      <ul>
        <li>Collaborated directly with clients (Product Owners) to gather requirements, prioritize features, and ensure timely deliveries.</li>
      </ul>

      <p>While a DevOps team handled the infrastructure, my focus was on complete backend and frontend development, as well as quality assurance testing.</p>

      <h2>Project 2: Sales Platform for Ofertacero</h2>
      <p>In this project, I contributed to the ongoing development of a sales platform for Oferta Cero, a client focused on product commercialization. My work centered on:</p>
      <ul>
        <li>Adding Visual Identity: Implemented the brand's visual identity using Next.js and Tailwind CSS.</li>
        <li>Developing New Features: Enhanced the platform's capabilities by making adjustments and adding new features.</li>
        <li>Bug Fixing: Ensured the system operated optimally by resolving technical issues that arose during its operation.</li>
      </ul>

      <h2>Skills and Achievements</h2>
      <p>At Moving Lake, I worked independently on key projects, which allowed me to strengthen and apply skills in:</p>
      <ul>
        <li>Full-Stack Development: Delivered high-quality, functional products by handling backend, frontend, and testing.</li>
        <li>International Collaboration: Worked with global clients across Africa and Latin America, tailoring solutions to different markets.</li>
        <li>Technical Project Management: Coordinated meetings, managed backlogs, and ensured on-time deliveries with Product Owners.</li>
      </ul>

      <h2>Challenges and Learnings</h2>
      <ul>
        <li>Integrating Legacy Technology: Adapting a system developed by another team to new technical standards was a significant challenge.</li>
        <li>Autonomous Work: Being responsible for the entire technical development process helped refine my organizational and technical skills.</li>
        <li>Visual Identity: Learned to translate branding concepts into functional and visually consistent interfaces.</li>
      </ul>

      <h2>Final Outcome</h2>
      <ul>
        <li>The vacation rental system was successfully migrated and adapted, enabling clients to expand their operations in different regions.</li>
        <li>The Oferta Cero sales platform significantly improved its visual identity and functionality, meeting client expectations.</li>
        <li>I solidified my technical expertise in React, Next.js, Django, Styled Components, and Tailwind CSS, establishing myself as a comprehensive full-stack developer.</li>
      </ul>

    `,
  },
  casai: {
    title: "Casai: Leading Mobile and Web Development at Latin America's Largest Real Estate Startup",
    headerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casai-UfUulLmLkNIJpj08jTCGCKJXW1DfIX.webp",
    content: `
      <p>My experience at Casai marked a turning point in my professional career. Casai was a startup focused on real estate and short-term rentals, recognized as the largest real estate startup in Latin America, with operations in Mexico and Brazil. I worked there for four years, starting as an Android developer and progressing to become the tech lead of the mobile and web development teams.</p>

      <h2>Role and Responsibilities</h2>
      <p>At Casai, I led a multidisciplinary team composed of:</p>
      <ul>
        <li>1 additional Android developer.</li>
        <li>2 frontend developers.</li>
      </ul>
      <p>We collaborated constantly with:</p>
      <ul>
        <li>2 product designers.</li>
        <li>1 product owner, later replaced to continue development.</li>
      </ul>
      <p>We followed the Agile Scrum methodology, which enabled effective communication and iterative value delivery.</p>

      <h2>Mobile Application Development</h2>
      <p>At Casai, I developed two Android applications:</p>
      <ol>
        <li><strong>Guest Application:</strong> Designed for customers to manage their reservations, communicate with the support team, and access relevant information about their stay.</li>
        <li><strong>Hotel Front Desk Application:</strong> Used internally by reception staff to manage guest check-ins and check-outs, as well as other operational tasks.</li>
      </ol>
      <p>Both applications were developed using:</p>
      <ul>
        <li>Kotlin as the primary programming language.</li>
        <li>Retrofit and Room for backend communication and local data persistence.</li>
        <li>XML for user interfaces, adhering to Material Design guidelines.</li>
      </ul>
      <p>This experience allowed me to deepen my expertise in Material Design, creating visually appealing and functional interfaces.</p>

      <h2>Web Development with a Design System</h2>
      <p>In addition to mobile applications, I led the development of Casai's website. The site included a booking system and administrative functionalities, built with:</p>
      <ul>
        <li>React and TypeScript.</li>
        <li>Styled Components.</li>
        <li>Bootstrap and Webpack.</li>
        <li>Storybook for implementing a design system.</li>
      </ul>
      <p>While the design system provided visual consistency, I later realized that maintaining complex infrastructure could hinder work in small teams. This lesson was crucial for simplifying systems in future projects.</p>

      <h2>Microservices and Backend</h2>
      <p>I also developed a microservice with Spring Boot and Kotlin to integrate the service desk with a queueing system. This microservice monitored and processed new reservations created on the platform. Although my involvement in AWS infrastructure was limited, I resolved critical bugs and ensured the service operated correctly.</p>

      <h2>Key Learnings and Achievements</h2>
      <ul>
        <li>Progressed from Android developer to tech lead, showcasing leadership and technical growth.</li>
        <li>Developed and maintained two critical Android applications, enhancing guest experience and operational efficiency.</li>
        <li>Led the development of a comprehensive website with booking and administrative capabilities.</li>
        <li>Gained valuable insights into the challenges of maintaining complex design systems in small teams.</li>
        <li>Expanded skill set to include microservice development and backend integration.</li>
      </ul>

      <p>My time at Casai was instrumental in shaping my career, providing me with diverse experiences across mobile and web development, team leadership, and startup operations in the competitive real estate tech sector.</p>
    `,
  },
  "farmacias-especializadas": {
    title: "Farmacias Especializadas (FESA): Revolutionizing Medicine Delivery in Mexico",
    headerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fesa-N4ChbTd8kgRmw4s62eW64l1KHdB8cK.webp",
    content: `
      <p>One of the most challenging and rewarding projects I've worked on was developing a delivery application for Farmacias Especializadas FESA, a renowned pharmaceutical chain in Mexico. This project involved creating a technological solution to optimize the logistics of delivering medications, both between branches and directly to end customers.</p>

      <h2>Project Objective</h2>
      <p>The application was specifically designed for the company's delivery personnel. Its main function was to move stock between pharmacies and deliver medications to customers who placed orders through the call center. Once an order was received, the backend calculated the best delivery route, and this information was sent to and consumed by the mobile application.</p>

      <figure>
        <img src="/images/design-mode/fesa.webp" alt="FESA Project" />
        <figcaption>Farmacias Especializadas FESA logo, representing the brand for which the delivery app was developed</figcaption>
      </figure>

      <h2>My Role and Responsibilities</h2>
      <p>I was the Android developer responsible for the project, participating from its inception to its release on the Play Store. My responsibilities included:</p>
      <ul>
        <li><strong>Graphic Interface Design:</strong> Creating wireframes and prototypes using Whimsical.</li>
        <li><strong>Full App Development:</strong> Utilizing technologies such as Jetpack Compose, Kotlin, Retrofit, Room, Flow, and Google Maps and Roads APIs.</li>
        <li><strong>Implementation of Key Features:</strong>
          <ul>
            <li>Displaying optimized routes for delivery personnel.</li>
            <li>Integration with GPS for real-time tracking.</li>
            <li>Sending notifications and tracking orders.</li>
          </ul>
        </li>
        <li><strong>Test Management:</strong> Using Firebase Distribution to distribute APKs among testers and managing simulations in Android Studio to verify app behavior in various locations.</li>
        <li><strong>Field Testing:</strong> Conducting physical tests with delivery drivers on motorcycles to validate the app's accuracy and usability.</li>
      </ul>

      <h2>Technologies Used</h2>
      <p>The project leveraged a robust and modern tech stack, including:</p>
      <ul>
        <li>Jetpack Compose for intuitive and efficient UI design.</li>
        <li>Kotlin as the primary programming language.</li>
        <li>Retrofit for backend communication.</li>
        <li>Room and Flow for local data management.</li>
        <li>Google Maps, Routes, and GPS APIs for geolocation and route calculation.</li>
        <li>Firebase Distribution for managing test versions.</li>
      </ul>

      <h2>Team and Duration</h2>
      <p>The team consisted of:</p>
      <ul>
        <li>Two backend developers.</li>
        <li>One frontend developer.</li>
        <li>Myself, as the Android developer.</li>
      </ul>
      <p>The project lasted six months, following a defined schedule and constant collaboration between development areas.</p>

      <h2>Challenges and Learnings</h2>
      <p>The biggest challenge was ensuring the application worked correctly under real-world conditions. This involved fine-tuning route calculations and optimizing data and battery usage — crucial factors for delivery personnel on the move. Additionally, I learned a lot about the importance of field testing and the value of a well-coordinated team.</p>

      <h2>Final Outcome</h2>
      <p>The application was successfully published on the Play Store and is currently used by Farmacias Especializadas FESA delivery personnel to improve medication delivery efficiency. This project not only allowed me to solidify my technical skills but also gave me the satisfaction of creating a product that directly impacts people's lives.</p>
    `,
  },
  "building-ai-products-that-scale": {
    title: "Building AI Products That Scale",
    headerImage: "/ai-technology-abstract.png",
    content: `
      <p>In the rapidly evolving landscape of artificial intelligence, building products that scale requires more than just technical expertise. It demands a deep understanding of synthetic data, product strategy, and responsible AI deployment in enterprise environments.</p>

      <h2>The Challenge of Scale</h2>
      <p>As AI products move from proof-of-concept to production, organizations face unique challenges. The gap between a working prototype and a scalable solution is often underestimated. This gap encompasses not just technical infrastructure, but also data quality, model governance, and organizational readiness.</p>

      <h2>Synthetic Data as a Foundation</h2>
      <p>One of the most powerful tools in building scalable AI products is synthetic data. By generating high-quality synthetic datasets, we can:</p>
      <ul>
        <li>Overcome data scarcity and privacy constraints</li>
        <li>Create balanced datasets that reduce bias</li>
        <li>Accelerate development cycles through rapid iteration</li>
        <li>Enable testing at scale without production data risks</li>
      </ul>

      <h2>Product Strategy Considerations</h2>
      <p>Successful AI products require a clear product strategy that aligns technical capabilities with business objectives. Key considerations include:</p>
      <ul>
        <li>Defining clear success metrics beyond model accuracy</li>
        <li>Building feedback loops for continuous improvement</li>
        <li>Establishing governance frameworks for responsible AI</li>
        <li>Creating transparent communication channels with stakeholders</li>
      </ul>

      <h2>Responsible AI Deployment</h2>
      <p>As AI systems become more prevalent in enterprise environments, responsible deployment becomes critical. This includes:</p>
      <ul>
        <li>Implementing robust monitoring and alerting systems</li>
        <li>Establishing clear accountability and decision-making processes</li>
        <li>Ensuring transparency in model behavior and limitations</li>
        <li>Building in safeguards against unintended consequences</li>
      </ul>

      <h2>Lessons Learned</h2>
      <p>Through my experience building AI products at scale, several key lessons have emerged:</p>
      <ul>
        <li>Start with the problem, not the technology</li>
        <li>Invest in data infrastructure early</li>
        <li>Build cross-functional teams with diverse perspectives</li>
        <li>Prioritize explainability and interpretability</li>
        <li>Plan for continuous learning and adaptation</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>The future of AI products lies in our ability to build systems that are not just powerful, but also reliable, ethical, and truly valuable to end users. By focusing on synthetic data, strategic product thinking, and responsible deployment practices, we can create AI solutions that scale effectively and deliver lasting impact.</p>
    `,
  },
  "data-strategy-modern-organizations": {
    title: "Data Strategy in Modern Organizations",
    headerImage: "/data-analytics-dashboard.png",
    content: `
      <p>In today's data-driven world, organizations that successfully implement data strategies gain significant competitive advantages. However, the path from data collection to data-driven decision making is complex and requires careful planning, cross-functional collaboration, and strong stakeholder alignment.</p>

      <h2>The Foundation of Data Strategy</h2>
      <p>A robust data strategy begins with understanding the organization's current state and desired future state. This involves:</p>
      <ul>
        <li>Assessing existing data infrastructure and capabilities</li>
        <li>Identifying key business questions that data can answer</li>
        <li>Mapping data flows across the organization</li>
        <li>Understanding stakeholder needs and pain points</li>
      </ul>

      <h2>Building Cross-Functional Teams</h2>
      <p>One of the most critical lessons I've learned is that data strategy cannot succeed in isolation. Effective implementation requires:</p>
      <ul>
        <li>Strong partnerships between data teams and business units</li>
        <li>Clear communication channels across departments</li>
        <li>Shared ownership of data quality and governance</li>
        <li>Regular alignment meetings to ensure strategic coherence</li>
      </ul>

      <h2>Stakeholder Management</h2>
      <p>Managing diverse stakeholder groups is essential for data strategy success. Different stakeholders have different needs:</p>
      <ul>
        <li><strong>Executives:</strong> Need high-level insights and ROI justification</li>
        <li><strong>Business Users:</strong> Require accessible tools and actionable insights</li>
        <li><strong>Technical Teams:</strong> Focus on infrastructure, scalability, and data quality</li>
        <li><strong>Compliance:</strong> Ensure data governance and regulatory adherence</li>
      </ul>

      <h2>Implementing Data-Driven Decision Making</h2>
      <p>Moving from data availability to data-driven decisions requires cultural change. Key steps include:</p>
      <ul>
        <li>Establishing clear metrics and KPIs aligned with business goals</li>
        <li>Creating self-service analytics capabilities</li>
        <li>Building trust in data through transparency and validation</li>
        <li>Celebrating wins and learning from failures</li>
      </ul>

      <h2>Common Pitfalls to Avoid</h2>
      <p>Through experience, I've identified several common mistakes organizations make:</p>
      <ul>
        <li>Focusing on technology before understanding business needs</li>
        <li>Underestimating the importance of data quality</li>
        <li>Neglecting change management and training</li>
        <li>Creating data silos instead of promoting collaboration</li>
        <li>Failing to measure and communicate impact</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>A successful data strategy should be measurable. Key indicators include:</p>
      <ul>
        <li>Increased adoption of data tools and platforms</li>
        <li>Faster time-to-insight for business questions</li>
        <li>Improved decision quality and outcomes</li>
        <li>Reduced data-related incidents and errors</li>
        <li>Higher stakeholder satisfaction scores</li>
      </ul>

      <h2>The Path Forward</h2>
      <p>Data strategy is not a one-time initiative but an ongoing journey. Organizations must continuously adapt their strategies to changing business needs, technological advances, and market conditions. By maintaining focus on cross-functional collaboration, stakeholder alignment, and measurable outcomes, organizations can build data capabilities that drive lasting competitive advantage.</p>
    `,
  },
  "product-manager-guide-to-ai": {
    title: "The Product Manager's Guide to AI",
    headerImage: "/ai-product-management.jpg",
    content: `
      <p>As artificial intelligence becomes increasingly central to product development, product managers face a unique challenge: how to effectively lead AI initiatives without being machine learning experts. The good news is that successful AI product management relies more on strong product fundamentals than deep technical expertise.</p>

      <h2>Understanding Your Role</h2>
      <p>As a product manager working with AI, your role is to:</p>
      <ul>
        <li>Bridge the gap between technical teams and business stakeholders</li>
        <li>Define clear success metrics beyond model accuracy</li>
        <li>Ensure AI solutions solve real user problems</li>
        <li>Manage expectations about AI capabilities and limitations</li>
      </ul>

      <h2>Essential AI Concepts for PMs</h2>
      <p>While you don't need to be an ML expert, understanding these concepts is crucial:</p>
      <ul>
        <li><strong>Training vs. Inference:</strong> The difference between building and using models</li>
        <li><strong>Model Performance Metrics:</strong> Accuracy, precision, recall, and their trade-offs</li>
        <li><strong>Data Requirements:</strong> Quality, quantity, and labeling needs</li>
        <li><strong>Model Drift:</strong> How model performance degrades over time</li>
        <li><strong>Bias and Fairness:</strong> Ethical considerations in AI systems</li>
      </ul>

      <h2>Defining Success for AI Products</h2>
      <p>AI products require different success metrics than traditional software:</p>
      <ul>
        <li>Business impact metrics (revenue, cost savings, efficiency gains)</li>
        <li>User experience metrics (satisfaction, adoption, task completion)</li>
        <li>Model performance metrics (accuracy, latency, reliability)</li>
        <li>Operational metrics (uptime, error rates, monitoring alerts)</li>
      </ul>

      <h2>Working with Data Science Teams</h2>
      <p>Effective collaboration with data scientists requires:</p>
      <ul>
        <li>Clear problem definition and success criteria</li>
        <li>Realistic timelines that account for experimentation</li>
        <li>Regular check-ins to assess progress and adjust direction</li>
        <li>Shared understanding of constraints and trade-offs</li>
      </ul>

      <h2>Managing Stakeholder Expectations</h2>
      <p>AI often comes with inflated expectations. Your job is to:</p>
      <ul>
        <li>Educate stakeholders on AI capabilities and limitations</li>
        <li>Set realistic timelines for AI development</li>
        <li>Communicate uncertainty and iteration needs</li>
        <li>Celebrate incremental progress and learning</li>
      </ul>

      <h2>Building AI Products Iteratively</h2>
      <p>Apply agile principles to AI development:</p>
      <ul>
        <li>Start with simple baselines before complex models</li>
        <li>Build feedback loops for continuous improvement</li>
        <li>Test with real users early and often</li>
        <li>Plan for model updates and retraining</li>
      </ul>

      <h2>Ethical Considerations</h2>
      <p>As a PM, you're responsible for ensuring ethical AI development:</p>
      <ul>
        <li>Identify potential biases in training data</li>
        <li>Consider fairness across different user groups</li>
        <li>Ensure transparency in AI decision-making</li>
        <li>Plan for human oversight and intervention</li>
        <li>Protect user privacy and data security</li>
      </ul>

      <h2>Key Takeaways</h2>
      <p>Successful AI product management doesn't require you to become a machine learning expert. Instead, focus on:</p>
      <ul>
        <li>Strong product fundamentals and user-centric thinking</li>
        <li>Clear communication and expectation management</li>
        <li>Collaborative relationships with technical teams</li>
        <li>Ethical considerations and responsible AI practices</li>
        <li>Iterative development and continuous learning</li>
      </ul>

      <p>By applying these principles, product managers can effectively lead AI initiatives and deliver products that create real value for users and businesses alike.</p>
    `,
  },
  "analyst-to-product-leader": {
    title: "From Analyst to Product Leader",
    headerImage: "/career-growth-leadership.jpg",
    content: `
      <p>The transition from data analyst to product leader is a journey that many professionals consider but few successfully navigate. Having made this transition myself, I've learned that while the roles are different, many skills transfer beautifully between them. Here are my reflections on this career evolution.</p>

      <h2>Why Make the Transition?</h2>
      <p>Data analysts often find themselves drawn to product management because:</p>
      <ul>
        <li>They see opportunities to apply insights more directly to product decisions</li>
        <li>They want broader influence on product strategy and direction</li>
        <li>They're naturally curious about the "why" behind the data</li>
        <li>They enjoy working cross-functionally and solving complex problems</li>
      </ul>

      <h2>Transferable Skills</h2>
      <p>The good news is that data analysts bring valuable skills to product management:</p>
      <ul>
        <li><strong>Data-Driven Decision Making:</strong> Natural ability to use data to inform choices</li>
        <li><strong>Analytical Thinking:</strong> Breaking down complex problems into manageable parts</li>
        <li><strong>Stakeholder Communication:</strong> Translating technical insights for business audiences</li>
        <li><strong>Metrics Definition:</strong> Understanding what to measure and why</li>
        <li><strong>Experimentation:</strong> Designing and analyzing A/B tests</li>
      </ul>

      <h2>Skills to Develop</h2>
      <p>However, product management requires additional capabilities:</p>
      <ul>
        <li><strong>Product Vision:</strong> Defining long-term product strategy and direction</li>
        <li><strong>User Empathy:</strong> Deep understanding of user needs and pain points</li>
        <li><strong>Prioritization:</strong> Making tough trade-offs with limited resources</li>
        <li><strong>Technical Collaboration:</strong> Working effectively with engineering teams</li>
        <li><strong>Business Acumen:</strong> Understanding market dynamics and business models</li>
      </ul>

      <h2>The Transition Journey</h2>
      <p>My transition involved several key steps:</p>
      <ul>
        <li><strong>Expanding Scope:</strong> Taking on more product-focused projects as an analyst</li>
        <li><strong>Building Relationships:</strong> Partnering closely with product managers</li>
        <li><strong>Learning the Craft:</strong> Reading books, taking courses, attending meetups</li>
        <li><strong>Seeking Mentorship:</strong> Finding experienced PMs to guide my development</li>
        <li><strong>Taking the Leap:</strong> Moving into an associate or junior PM role</li>
      </ul>

      <h2>Challenges Faced</h2>
      <p>The transition wasn't without difficulties:</p>
      <ul>
        <li><strong>Ambiguity:</strong> Moving from clear analytical questions to fuzzy product problems</li>
        <li><strong>Influence Without Authority:</strong> Learning to lead without direct reports</li>
        <li><strong>Broader Scope:</strong> Balancing multiple priorities and stakeholders</li>
        <li><strong>Imperfect Information:</strong> Making decisions without complete data</li>
        <li><strong>Identity Shift:</strong> Letting go of being "the data person"</li>
      </ul>

      <h2>Leveraging Your Analytical Background</h2>
      <p>Your analytical background becomes a superpower in product management:</p>
      <ul>
        <li>You naturally think in terms of metrics and measurement</li>
        <li>You're comfortable with data and can spot patterns others miss</li>
        <li>You can design better experiments and interpret results accurately</li>
        <li>You bring rigor to product decisions and strategy</li>
        <li>You can bridge the gap between data teams and product teams</li>
      </ul>

      <h2>Advice for Aspiring Product Leaders</h2>
      <p>If you're considering this transition, here's my advice:</p>
      <ul>
        <li><strong>Start Now:</strong> Begin thinking like a PM in your current role</li>
        <li><strong>Build Relationships:</strong> Partner with PMs and learn from them</li>
        <li><strong>Develop User Empathy:</strong> Spend time with users and customers</li>
        <li><strong>Learn the Business:</strong> Understand your company's strategy and economics</li>
        <li><strong>Practice Communication:</strong> Work on storytelling and influence skills</li>
        <li><strong>Be Patient:</strong> The transition takes time and intentional effort</li>
      </ul>

      <h2>The Rewards</h2>
      <p>Despite the challenges, the transition has been incredibly rewarding:</p>
      <ul>
        <li>Greater impact on product direction and user experience</li>
        <li>Broader scope and more diverse challenges</li>
        <li>Stronger cross-functional relationships</li>
        <li>Deeper understanding of the business</li>
        <li>Continued use of analytical skills in new contexts</li>
      </ul>

      <h2>Final Thoughts</h2>
      <p>The journey from analyst to product leader is challenging but achievable. Your analytical background provides a strong foundation, and with intentional skill development and the right opportunities, you can successfully make the transition. The key is to leverage your strengths while actively developing new capabilities, and to approach the transition with curiosity, humility, and persistence.</p>
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-64 mb-6">
            <Image
              src={post.headerImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
      </Card>
    </div>
  )
}
