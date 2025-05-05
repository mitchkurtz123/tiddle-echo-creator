
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-tiddle-purple mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-tiddle-gray dark:text-gray-300">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Introduction</h2>
              <p>
                Welcome to Tiddle.io. These Terms of Service govern your use of our website and services. 
                By accessing or using our website, you agree to be bound by these Terms.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Use of Our Website</h2>
              <p>
                You may use our website for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use our website in any way that violates any applicable local, national, or international law or regulation</li>
                <li>Attempt to gain unauthorized access to any part of our website</li>
                <li>Use our website to transmit or upload any viruses, malware, or other harmful code</li>
                <li>Interfere with or disrupt the operation of our website</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Intellectual Property</h2>
              <p>
                The content on our website, including but not limited to text, graphics, logos, images, and software, 
                is the property of Tiddle.io and is protected by copyright and other intellectual property laws. 
                You may not reproduce, distribute, modify, or create derivative works of any content from our website 
                without our express written permission.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Disclaimer</h2>
              <p>
                Our website and its content are provided "as is" and "as available" without any warranties of any kind, 
                either express or implied. We do not guarantee that our website will be uninterrupted, error-free, or free from viruses.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Tiddle.io shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
                or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of our website.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Changes to These Terms</h2>
              <p>
                We may revise these Terms of Service from time to time. The most current version will always be on this page.
                By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us via our <a href="/contact" className="text-tiddle-purple hover:underline">Contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
