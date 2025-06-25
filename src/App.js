import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-cyan-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16 text-center px-4 shadow-md">
        <motion.img
          src="/profile.jpg"
          alt="Balaga Sai Kumar"
          className="w-32 h-32 object-cover rounded-full border-4 border-white mx-auto mb-4 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          className="text-5xl font-extrabold mb-2"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Balaga Sai Kumar
        </motion.h1>
        <p className="text-xl">AWS & DevOps Engineer | Cloud Automation Enthusiast</p>
        <div className="mt-6">
          <a
            href="/Sai_aws devops_resume_2025_fresher.pdf"
            download
            className="bg-white text-blue-900 font-semibold px-5 py-2 rounded shadow hover:bg-blue-100"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md my-8">
        <motion.h2
          className="text-3xl font-bold mb-6 text-left text-purple-800 border-l-8 border-purple-300 pl-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Skills from Resume
        </motion.h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg list-disc list-inside">
          <li><strong className="text-blue-700">AWS Services:</strong> EC2, S3, IAM, VPC, RDS, EBS, CloudFormation</li>
          <li><strong className="text-blue-700">Compute:</strong> Launching Linux & Windows EC2 instances</li>
          <li><strong className="text-blue-700">Security:</strong> IAM Roles, Policies, Security Groups</li>
          <li><strong className="text-blue-700">Monitoring:</strong> CloudWatch, CloudTrail, SNS, Alarms</li>
          <li><strong className="text-blue-700">CI/CD Tools:</strong> Git, GitHub, Jenkins, Maven</li>
          <li><strong className="text-blue-700">Build & Deploy:</strong> Apache Tomcat, Artifactory</li>
          <li><strong className="text-blue-700">Infrastructure:</strong> Terraform, Shell Scripting</li>
          <li><strong className="text-blue-700">Containers:</strong> Docker, Docker Hub</li>
          <li><strong className="text-blue-700">Load Balancing:</strong> Auto Scaling</li>
          <li><strong className="text-blue-700">Web Servers:</strong> Nginx, Apache</li>
          <li><strong className="text-blue-700">OS & Scripting:</strong> Linux, Bash Scripting</li>
          <li><strong className="text-blue-700">Version Control:</strong> Git CLI, GitHub Repositories</li>
        </ul>
      </section>

      {/* Certifications Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto bg-white rounded-xl shadow">
        <motion.h2
          className="text-3xl font-bold mb-6 text-left text-green-800 border-l-8 border-green-300 pl-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Certifications & Tools
        </motion.h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-lg list-disc list-inside">
          <li>AWS Cloud Practitioner (In Progress)</li>
          <li>Linux Essentials</li>
          <li>Git & GitHub Fundamentals</li>
          <li>Terraform Basics</li>
          <li>Jenkins for CI/CD</li>
          <li>Shell Scripting for Admin Automation</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-6 text-left text-blue-800 border-l-8 border-blue-300 pl-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Projects
        </motion.h2>

        {/* Project 1 */}
        <motion.div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 border-blue-600" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-xl font-bold text-blue-800">AI-Driven Auto-Healing System (In Progress)</h3>
          <a href="#" className="text-sm text-blue-500 underline">(GitHub link not provided)</a>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>Built a recovery system using AWS CloudWatch, Lambda, and SNS</li>
            <li>Detects and redeploys unhealthy EC2; alerts via email/SNS</li>
            <li>Backup/restore with S3 and automation scripts</li>
            <li>Automatically restarts or replaces unhealthy EC2 instances</li>
          </ul>
        </motion.div>
{/* Project 2 */}
<motion.div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 border-blue-600" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  <h3 className="text-xl font-bold text-blue-800">Website Hosting Using CI/CD</h3>
  <a href="https://github.com/saikumar0503/java-web-application.git" className="text-sm text-blue-500 underline">https://github.com/saikumar0503/java-web-application.git</a>
  <ul className="list-disc list-inside mt-2 text-lg">
    <li>Built CI/CD pipeline using Jenkins, Git, Maven, EC2</li>
    <li>Deployed Java apps on Tomcat; integrated Nginx and CloudWatch</li>
    <li>Reduced deployment time by 40%, improved alerts by 25%</li>
    <li>Configured Git webhooks to auto-trigger Jenkins builds on code push</li>
    <li>Enabled real-time monitoring using AWS CloudWatch and log analysis</li>
    <li>Implemented automated testing and rollback strategy in the pipeline</li>
    <li>Enhanced deployment reliability with consistent environment provisioning</li>
  </ul>
</motion.div>


      {/* Project 3 */}
<motion.div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 border-blue-600" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  <h3 className="text-xl font-bold text-blue-800">AWS Infra Deployment Using Terraform</h3>
  <a href="https://github.com/saikumar0503/Terraform_project.git" className="text-sm text-blue-500 underline">https://github.com/saikumar0503/Terraform_project.git</a>
  <ul className="list-disc list-inside mt-2 text-lg">
    <li>Provisioned EC2, VPC, S3, IAM using Terraform modules</li>
    <li>Stored Terraform states in S3 and implemented state locking</li>
    <li>Followed IAM best practices for secure infrastructure provisioning</li>
    <li>Created reusable and scalable Terraform modules for multiple environments</li>
    <li>Integrated Terraform workflows into version control for better collaboration</li>
    <li>Applied automated validation using <code>terraform validate</code> and <code>plan</code> commands</li>
  </ul>
</motion.div>


       {/* Project 4 */}
<motion.div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 border-blue-600" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  <h3 className="text-xl font-bold text-blue-800">Server Health Monitoring Tool (Shell Script)</h3>
  <a href="https://github.com/saikumar0503/Shell_scripting_project.git" className="text-sm text-blue-500 underline">https://github.com/saikumar0503/Shell_scripting_project.git</a>
  <ul className="list-disc list-inside mt-2 text-lg">
    <li>Bash script to monitor CPU, memory, and disk usage in real-time</li>
    <li>Configured automatic email alerts when thresholds are breached</li>
    <li>Scheduled the script using cron for continuous background execution</li>
    <li>Logged health check data to files for future troubleshooting and auditing</li>
    <li>Lightweight and portable—suitable for use on multiple Linux distributions</li>
    <li>Helps in early detection of server issues, improving system uptime</li>
  </ul>
</motion.div>

      </section>

      {/* Footer Contact Section */}
      <footer className="bg-blue-900 text-white py-10 text-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-2">📞 Phone: +91 7032174345</p>
        <p className="mb-2">📧 Email: saikumarbalaga03@gmail.com</p>
        <p className="mb-2">🔗 LinkedIn: <a className="underline" href="https://linkedin.com/in/sai-kumar-1855b0312">linkedin.com/in/sai-kumar-1855b0312</a></p>
        <p className="mb-2">🐙 GitHub: <a className="underline" href="https://github.com/saikumar0503">github.com/saikumar0503</a></p>
      </footer>
    </main>
  );
}
