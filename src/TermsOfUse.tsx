import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

export default function TermsOfUse() {
    return (
        <div className="min-h-screen relative bg-[#0B0F19]">
            <div className="noise-overlay" />

            {/* Header */}
            <nav className="relative z-50 py-6 border-b border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Home</span>
                    </Link>
                    <img src={logo} alt="Angel AI Logo" className="h-6 w-auto object-contain" />
                </div>
            </nav>

            {/* Content */}
            <div className="relative z-10 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl font-bold mb-4">Terms of Use</h1>
                        <p className="text-white/40 mb-12">Effective date: 10/01/2026</p>

                        <div className="glass-card p-8 md:p-12 space-y-8 text-white/80 leading-relaxed">
                            <div>
                                <p className="mb-4">
                                    <strong>Website:</strong> theangelway.ai<br />
                                    <strong>Operator:</strong> Angel Method Ltd.<br />
                                    <strong>Contact:</strong> <a href="mailto:info@theangelway.ai" className="text-indigo-400 hover:text-indigo-300">info@theangelway.ai</a>
                                </p>
                                <p>
                                    These Terms of Use govern your access to and use of this website. By using the website, you agree to these Terms. If you do not agree, do not use the website.
                                </p>
                            </div>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Website purpose</h2>
                                <p>This website provides general information about Angel Method Ltd. and our activities. The content is provided for informational purposes only.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. No professional advice</h2>
                                <p>Nothing on this website constitutes legal, financial, medical, or other professional advice. You are responsible for how you use information from the website.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual property</h2>
                                <p className="mb-4">All content on the website, including text, graphics, branding, logos, and design elements, is owned by or licensed to Angel Method Ltd. and is protected by applicable intellectual property laws.</p>
                                <p>You may view and use the website for personal, non-commercial purposes only. You may not copy, reproduce, distribute, modify, or exploit any part of the website without prior written permission.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable use</h2>
                                <p className="mb-4">You agree not to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Use the website in violation of any applicable law or regulation</li>
                                    <li>Attempt to gain unauthorized access to systems or data</li>
                                    <li>Interfere with the website's operation or security</li>
                                    <li>Introduce malicious or harmful code</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Third-party services and links</h2>
                                <p>The website may reference or link to third-party services or websites. We are not responsible for third-party content, policies, or practices, and your use of third-party services is at your own risk.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Disclaimers</h2>
                                <p className="mb-4">The website is provided on an "as is" and "as available" basis. To the maximum extent permitted by law, Angel Method Ltd. disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
                                <p>We do not guarantee that the website will be uninterrupted, error-free, or secure.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of liability</h2>
                                <p className="mb-4">To the maximum extent permitted by law, Angel Method Ltd. will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website.</p>
                                <p>To the extent liability cannot be excluded, Angel Method Ltd.'s total liability will not exceed ILS 300 or its equivalent.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Indemnification</h2>
                                <p>You agree to indemnify and hold harmless Angel Method Ltd. from and against any claims, damages, losses, and expenses arising out of your violation of these Terms or misuse of the website.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to the website and terms</h2>
                                <p>We may modify or discontinue the website at any time. We may update these Terms by posting a revised version with an updated effective date. Continued use of the website constitutes acceptance of the updated Terms.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">10. Governing law and jurisdiction</h2>
                                <p>These Terms are governed by the laws of the State of Israel, without regard to conflict of laws principles. Any dispute arising from these Terms or the website will be subject to the exclusive jurisdiction of the competent courts in Israel.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">11. Contact</h2>
                                <p>For questions regarding these Terms, contact us at <a href="mailto:info@theangelway.ai" className="text-indigo-400 hover:text-indigo-300">info@theangelway.ai</a>.</p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
