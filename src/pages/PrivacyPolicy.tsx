
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-tiddle-purple mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-tiddle-gray dark:text-gray-300">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Introduction</h2>
              <p>
                This Privacy Policy explains how Tiddle.io ("we", "us", or "our") collects, uses, and protects your information 
                when you visit our website and use our contact form.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Information We Collect</h2>
              <p>
                We only collect information that you voluntarily provide to us through our contact form. This may include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your name</li>
                <li>Email address</li>
                <li>Message content</li>
                <li>Any other information you choose to provide in your message</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">How We Use Your Information</h2>
              <p>
                We use the information you provide via our contact form solely for the purpose of:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Responding to your inquiries</li>
                <li>Communicating with you about our services</li>
                <li>Improving our website and services</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Data Protection</h2>
              <p>
                We implement reasonable security measures to protect the information you provide from unauthorized access, disclosure, 
                alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Third-Party Services</h2>
              <p>
                We may use third-party services to help us operate our website or administer activities on our behalf, such as sending emails.
                These third parties may have access to your personal information only to perform these tasks on our behalf and are obligated 
                not to disclose or use it for any other purpose.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
                on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us via our <a href="/contact" className="text-tiddle-purple hover:underline">Contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
