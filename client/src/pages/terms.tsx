export default function Terms() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">TERMS OF SERVICE</h1>
        <p className = "text-2xl mb-4">Last Updated: September 20th, 2025</p>

         <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>Welcome to <strong> Mazah </strong> ("Company", "we", "our", "us")! </p>
            <p>These Terms of Service ("Terms") govern your use of our Mazah mobile application, a food waste reduction app that helps you track your food inventory, plan meals, and find local food banks for donations.</p>
            <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part, you may not access the Service.</p>
            <p><strong>Contact us at:</strong> mazah.foodsavingapp@gmail.com if you have any questions.</p>

            <h2 className="text-2xl font-semibold mb-4">2. About Our Service</h2>
            <p>Mazah is a <strong>free mobile application</strong> designed to help you:</p>
            <ul>
            <li>Track your food inventory and expiration dates</li>
            <li>Plan meals using ingredients you have</li>
            <li>Receive notifications about expiring food</li>
            <li>Find local food banks for donating surplus food</li>
            <li>Reduce food waste and support your community</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">3. Communications</h2>
            <p>By creating an account, you agree to receive:</p>
            <ul>
            <li><strong>Essential service communications</strong> (account verification, security alerts)</li>
            <li><strong>Food expiration notifications</strong> (if you enable them)</li>
            <li><strong>App updates and important announcements</strong></li>
            </ul>
            <p>We do <strong>NOT</strong> send:</p>
            <ul>
            <li>Marketing emails</li>
            <li>Promotional content</li>
            <li>Newsletter spam</li>
            </ul>
            <p>You can control notification preferences in the app settings.</p>

            <h2 className="text-2xl font-semibold mb-4">4. Free Service</h2>
            <p>Mazah is currently provided <strong>free of charge</strong>. We reserve the right to:</p>
            <ul>
            <li>Introduce premium features in the future (with advance notice)</li>
            <li>Maintain the core food tracking functionality as free</li>
            <li>Provide clear pricing for any future paid features</li>
            </ul>
            <p>If we introduce paid features, existing users will be notified and can continue using the free version.</p>

            <h2 className="text-2xl font-semibold mb-4">5. User Content and Data</h2>

            <h3>Your Food Data</h3>
            <ul>
            <li>You retain ownership of your food inventory, meal plans, and profile information</li>
            <li>We store this data securely to provide the service</li>
            <li>You can export or delete your data at any time</li>
            </ul>

            <h3>User Responsibilities</h3>
            <p>You agree to:</p>
            <ul>
            <li>Provide accurate information about your food items</li>
            <li>Use the app for personal food waste reduction purposes</li>
            <li>Respect the community purpose of food bank listings</li>
            <li>Not misuse the food bank finder feature</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">6. Content and Intellectual Property</h2>
            <p>All Service content, including:</p>
            <ul>
            <li>App design and functionality</li>
            <li>Recipe suggestions and meal ideas</li>
            <li>Food safety information</li>
            <li>Software code</li>
            </ul>
            <p>...is the property of Mazah and protected by intellectual property laws.</p>
            <p>You may not:</p>
            <ul>
            <li>Copy, modify, or distribute our app</li>
            <li>Reverse engineer the software</li>
            <li>Use our content for commercial purposes</li>
            <li>Create derivative works</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">7. Prohibited Uses</h2>
            <p>You agree not to use the Service to:</p>
            <ol>
            <li>Violate any applicable laws or regulations</li>
            <li>Harm or exploit minors</li>
            <li>Harass, abuse, or harm others</li>
            <li>Impersonate others or provide false information</li>
            <li>Infringe on intellectual property rights</li>
            <li>Share inappropriate or offensive content</li>
            <li>Abuse or misuse food bank information</li>
            <li>Use the app for commercial food distribution without permission</li>
            </ol>
            <p>Additionally, you must not:</p>
            <ol>
            <li>Attempt to hack, disable, or impair the Service</li>
            <li>Use automated systems to access the Service</li>
            <li>Copy or scrape food bank data for other purposes</li>
            <li>Introduce viruses or malicious software</li>
            <li>Attempt unauthorized access to user accounts</li>
            <li>Interfere with other users' enjoyment of the Service</li>
            <li>Create fake accounts or provide false food bank reviews</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-4">8. Third-Party Services</h2>
            <p>We use the following third-party services to operate our app:</p>

            <h3>Supabase (Backend Services)</h3>
            <ul>
            <li>Provides authentication, database, and real-time features</li>
            <li>Handles user accounts and food inventory data</li>
            <li>Privacy Policy: <a href="https://supabase.com/privacy">https://supabase.com/privacy</a></li>
            </ul>

            <h3>Spoonacular (Recipe API)</h3>
            <ul>
            <li>Provides recipe recommendations based on your food inventory</li>
            <li>Helps find recipes that use expiring ingredients</li>
            <li>Privacy Policy: <a href="https://spoonacular.com/food-api/privacy-policy">https://spoonacular.com/food-api/privacy-policy</a></li>
            </ul>

            <h3>Expo Platform (App Infrastructure)</h3>
            <ul>
            <li>Enables app delivery and push notifications</li>
            <li>Provides crash reporting and performance monitoring</li>
            <li>Privacy Policy: <a href="https://expo.dev/privacy">https://expo.dev/privacy</a></li>
            </ul>

            <h3>OpenStreetMap (Food Bank Locations)</h3>
            <ul>
            <li>Provides food bank location data</li>
            <li>Used only when you search for nearby food banks</li>
            <li>Privacy Policy: <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy">https://wiki.osmfoundation.org/wiki/Privacy_Policy</a></li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">9. Age Requirements</h2>
            <p>Our Service is designed to be safe and appropriate for users of all ages. However:</p>
            <p><strong>For users under 13:</strong> We recommend parental supervision to help younger children use the app safely and effectively.</p>
            <p><strong>For users 13-17:</strong> You may use the app independently, but we encourage discussing food safety and waste reduction with parents or guardians.</p>
            <p><strong>For all users:</strong> By using the Service, you represent that you have permission to create an account and use the app according to these Terms.</p>
            <p><strong>Parental involvement:</strong> Parents are welcome to help children of any age use Mazah to learn about food waste reduction and develop healthy eating habits.</p>

            <h2 className="text-2xl font-semibold mb-4">10. User Accounts</h2>
            <p>When creating an account, you agree to:</p>
            <ol>
            <li>Provide accurate and current information</li>
            <li>Maintain the security of your password</li>
            <li>Notify us immediately of unauthorized access</li>
            <li>Accept responsibility for all activities under your account</li>
            </ol>
            <p>We reserve the right to:</p>
            <ul>
            <li>Suspend or terminate accounts that violate these Terms</li>
            <li>Remove content that violates our policies</li>
            <li>Refuse service to anyone at our discretion</li>
            <li>Investigate suspicious activity</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">11. Food Safety Disclaimer</h2>
            <p><strong>Important:</strong> Mazah provides food tracking tools, but you are responsible for:</p>
            <ul>
            <li>Determining if food is safe to eat</li>
            <li>Following proper food safety guidelines</li>
            <li>Using your judgment about expiration dates</li>
            <li>Consulting health professionals for food safety questions</li>
            </ul>
            <p>We are not responsible for illness or harm resulting from food consumption decisions.</p>

            <h2 className="text-2xl font-semibold mb-4">12. Service Availability</h2>
            <p>We strive to provide reliable service, but we cannot guarantee:</p>
            <ul>
            <li>Uninterrupted access to the app</li>
            <li>Error-free operation</li>
            <li>Availability in all geographic locations</li>
            <li>Compatibility with all devices</li>
            </ul>
            <p>We may temporarily suspend the service for maintenance or updates.</p>

            <h2 className="text-2xl font-semibold mb-4">13. User Feedback</h2>
            <p>You may provide feedback about:</p>
            <ul>
            <li>App bugs or technical issues</li>
            <li>Feature suggestions and improvements</li>
            <li>Food safety concerns</li>
            <li>Food bank information updates</li>
            </ul>
            <p>By submitting feedback, you acknowledge that:</p>
            <ol>
            <li>Your feedback helps improve the service for everyone</li>
            <li>We may use your feedback without compensation</li>
            <li>Feedback is not confidential unless specifically marked as such</li>
            <li>We have no obligation to implement suggestions</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-4">14. Third-Party Links and Food Bank Information</h2>
            <p>Our Service may contain:</p>
            <ul>
            <li>Links to food bank websites</li>
            <li>Contact information for food banks</li>
            <li>Directions to food bank locations</li>
            </ul>
            <p>We are not responsible for:</p>
            <ul>
            <li>The accuracy of third-party information</li>
            <li>Food bank policies or operating hours</li>
            <li>The quality of services provided by food banks</li>
            <li>Any interactions you have with food banks</li>
            </ul>
            <p>Always verify information directly with food banks before visiting.</p>

            <h2 className="text-2xl font-semibold mb-4">15. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Mazah shall not be liable for:</p>
            <ul>
            <li>Indirect, incidental, or consequential damages</li>
            <li>Loss of data or food items</li>
            <li>Food safety decisions based on app information</li>
            <li>Interrupted service or technical issues</li>
            <li>Actions of third-party food banks</li>
            </ul>
            <p>Our liability is limited to the amount you paid for the service (currently $0).</p>

            <h2 className="text-2xl font-semibold mb-4">16. Termination</h2>
            <p>We may terminate or suspend your account if you:</p>
            <ul>
            <li>Violate these Terms of Service</li>
            <li>Abuse the food bank finder feature</li>
            <li>Provide false or misleading information</li>
            <li>Engage in harmful behavior toward other users</li>
            </ul>
            <p>You may terminate your account at any time by:</p>
            <ul>
            <li>Contacting us at mazah.foodsavingapp@gmail.com</li>
            <li>Requesting account deletion</li>
            <li>Discontinuing use of the Service</li>
            </ul>
            <p>Upon termination, your access will cease, but these Terms remain in effect for any remaining obligations.</p>

            <h2 className="text-2xl font-semibold mb-4">17. Governing Law</h2>
            <p>These Terms are governed by the laws of the United States and the state where Mazah is incorporated, without regard to conflict of law provisions.</p>

            <h2 className="text-2xl font-semibold mb-4">18. Changes to Terms</h2>
            <p>We may update these Terms to reflect:</p>
            <ul>
            <li>New app features</li>
            <li>Legal requirements</li>
            <li>Service improvements</li>
            </ul>
            <p>We will notify you of significant changes by:</p>
            <ul>
            <li>Updating the "Last Updated" date</li>
            <li>Posting a notice in the app</li>
            <li>Sending notification if required</li>
            </ul>
            <p>Continued use after changes indicates acceptance of new Terms.</p>

            <h2 className="text-2xl font-semibold mb-4">19. Severability and Waiver</h2>
            <p>If any provision of these Terms is found unenforceable:</p>
            <ul>
            <li>The remaining provisions remain in full effect</li>
            <li>Unenforceable provisions will be modified minimally to be valid</li>
            <li>No waiver of any Term is permanent or affects other provisions</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">20. Contact Information</h2>
            <p>For questions about these Terms or to report violations:</p>
            <p><strong>Email:</strong> mazah.foodsavingapp@gmail.com</p>
            <p><strong>Subject Line:</strong> Terms of Service Inquiry</p>
            <p>We aim to respond to all inquiries within 48 hours.</p>


            <p><strong>Thank you for helping reduce food waste and supporting your community with Mazah!</strong></p>
        </section>
          
        </div>
      </div>
    </div>
  );
}