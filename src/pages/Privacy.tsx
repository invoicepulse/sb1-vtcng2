const Privacy = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              At Heisenberg AI, we take your privacy seriously. This policy describes how we collect, 
              use, and protect your personal information when you use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Account information (name, email, company details)</li>
              <li>Usage data from your interactions with our AI consultant</li>
              <li>Conversation logs and session notes</li>
              <li>Payment information (processed securely by our payment providers)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>To provide and improve our AI consulting services</li>
              <li>To personalize your experience and recommendations</li>
              <li>To communicate with you about your account and updates</li>
              <li>To ensure the security of our services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h2>
            <p className="text-gray-600 mb-4">
              We implement industry-standard security measures to protect your data. All conversations 
              are encrypted, and we regularly audit our security practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to access, correct, or delete your personal information. Contact our 
              support team to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this privacy policy, please contact us at privacy@heisenberg-ai.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;