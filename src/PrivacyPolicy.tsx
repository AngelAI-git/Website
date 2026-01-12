import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

export default function PrivacyPolicy() {
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
                        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
                        <p className="text-white/40 mb-12">Effective date: 10/01/26</p>

                        <div className="glass-card p-8 md:p-12 space-y-8 text-white/80 leading-relaxed">
                            <div>
                                <p className="mb-4">
                                    <strong>Website:</strong> theangelway.ai<br />
                                    <strong>Operator:</strong> Angel Method Ltd.<br />
                                    <strong>Contact:</strong> <a href="mailto:info@theangelway.ai" className="text-indigo-400 hover:text-indigo-300">info@theangelway.ai</a>
                                </p>
                                <p>
                                    This Privacy Policy explains how Angel AI Method Ltd. ("we," "us," "our") collects, uses, and protects information when you visit this website or contact us.
                                </p>
                            </div>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Information we collect</h2>

                                <h3 className="text-xl font-semibold text-white mb-3">a. Information you provide</h3>
                                <p className="mb-4">When you contact us, for example by email, we may collect:</p>
                                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                                    <li>Your name (if provided)</li>
                                    <li>Your email address</li>
                                    <li>The content of your message and any attachments</li>
                                    <li>Any other information you choose to share</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-white mb-3">b. Information collected automatically</h3>
                                <p className="mb-4">When you visit the website, we and our service providers may automatically collect certain technical information, including:</p>
                                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                                    <li>IP address (processed for delivery and security purposes)</li>
                                    <li>Device type, browser type, and operating system</li>
                                    <li>Approximate location (country or city level)</li>
                                    <li>Pages viewed, time and date of access, and referring URL</li>
                                    <li>Basic performance and usage data</li>
                                </ul>
                                <p>This information is used to operate, secure, and improve the website.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Analytics and infrastructure services</h2>

                                <h3 className="text-xl font-semibold text-white mb-3">a. Google Analytics (GA4)</h3>
                                <p className="mb-4">We use Google Analytics, a web analytics service provided by Google LLC, to understand how visitors use the website. Google Analytics may collect information such as:</p>
                                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                                    <li>Pages visited and interactions on the site</li>
                                    <li>Device and browser information</li>
                                    <li>Approximate location derived from technical signals</li>
                                    <li>Referring URLs</li>
                                    <li>Aggregated usage statistics</li>
                                </ul>
                                <p className="mb-4">Google Analytics 4 anonymizes IP addresses by default and does not store full IP address information.</p>
                                <p className="mb-4">We do not use Google Analytics for advertising personalization, remarketing, or audience profiling.</p>
                                <p className="mb-4">Google may process analytics data on servers located outside Israel, including in the United States.</p>
                                <p>Where required by law, Google Analytics is loaded only after user consent.</p>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">b. Cloudflare (content delivery and security)</h3>
                                <p className="mb-4">We use Cloudflare as a content delivery network (CDN) and security provider. Cloudflare processes technical data such as IP addresses and request metadata in order to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Deliver website content efficiently</li>
                                    <li>Protect the site from abuse and attacks</li>
                                    <li>Ensure performance, reliability, and security</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. How we use information</h2>
                                <p className="mb-4">We use information to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Operate, maintain, and secure the website</li>
                                    <li>Respond to inquiries and communications</li>
                                    <li>Understand general website usage and performance</li>
                                    <li>Detect and prevent fraud, abuse, or security incidents</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Legal basis for processing</h2>
                                <p className="mb-4">Where applicable under Israeli law or other privacy regulations, we process information based on:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Your consent (for example, for analytics cookies where required)</li>
                                    <li>Our legitimate interests in operating and securing the website</li>
                                    <li>Compliance with legal obligations</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Sharing of information</h2>
                                <p className="mb-4">We do not sell personal information.</p>
                                <p className="mb-4">We may share information with:</p>
                                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                                    <li>Service providers that support website hosting, analytics, security, and communications</li>
                                    <li>Professional advisors such as legal or accounting advisors</li>
                                    <li>Authorities where required by law or to protect rights, safety, or security</li>
                                </ul>
                                <p>All service providers process information under appropriate confidentiality and data protection obligations.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Data retention</h2>
                                <p className="mb-4">We retain information only for as long as necessary:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Email correspondence is retained as needed for communication and reasonable business records</li>
                                    <li>Analytics data is retained according to the configuration of the analytics tools and for limited periods</li>
                                    <li>Security and infrastructure logs may be retained temporarily by our service providers</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Security</h2>
                                <p>We implement reasonable technical and organizational measures to protect information. However, no system is completely secure, and we cannot guarantee absolute security.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">8. International data transfers</h2>
                                <p>Information may be processed outside Israel, including in jurisdictions where our service providers operate. Where required, appropriate safeguards are applied to such transfers.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Your rights</h2>
                                <p>Depending on applicable law, you may have rights to access, correct, delete, or object to certain processing of your personal information. To exercise these rights, contact us at <a href="mailto:info@theangelway.ai" className="text-indigo-400 hover:text-indigo-300">info@theangelway.ai</a>.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">10. Children's privacy</h2>
                                <p>This website is not intended for children, and we do not knowingly collect personal information from minors.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">11. Changes to this Privacy Policy</h2>
                                <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date.</p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
