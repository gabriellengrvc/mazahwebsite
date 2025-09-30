export default function PrivacyPolicy() {
  return (
    <div className="pt-16 min-h-screen bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold mb-8">PRIVACY POLICY</h1>
        <p className="text-xl mb-4">Last Updated: September 20th, 2025</p>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <p>Welcome to <strong> Mazah </strong> ("us", "we", or "our"). We operate the Mazah mobile application (the "<strong>Service</strong>"), a food waste reduction app that helps users track their food inventory, plan meals, and find local food banks.</p>
            <p>This Privacy Policy explains how we collect, use, and protect your information when you use our Service.</p>

            <h2 className="text-xl font-semibold mb-4">What Information We Collect</h2>

            <h3>Account Information</h3>
            <p>When you create an account, we collect:</p>
            <ul>
            <li><strong>Email address</strong> (for authentication and account recovery)</li>
            <li><strong>Password</strong> (securely stored via Supabase Auth)</li>
            </ul>

            <h3>Profile Information</h3>
            <p>During onboarding, you may provide:</p>
            <ul>
            <li><strong>Household size</strong> (to personalize meal recommendations)</li>
            <li><strong>Dietary preferences</strong> (for better meal suggestions)</li>
            <li><strong>Cooking habits</strong> (to improve app functionality)</li>
            <li><strong>Food waste awareness level</strong> (for personalized tips)</li>
            <li><strong>Notification preferences</strong> (for food expiration alerts)</li>
            </ul>

            <h3>Food Inventory Data</h3>
            <p>To help you track and reduce food waste, we store:</p>
            <ul>
            <li><strong>Food items</strong> you add to your inventory</li>
            <li><strong>Expiration dates</strong> and storage locations</li>
            <li><strong>Meal plans</strong> you create</li>
            <li><strong>Usage patterns</strong> to improve recommendations</li>
            </ul>

            <h3>Location Data (Optional)</h3>
            <p>With your explicit permission, we may collect your location to:</p>
            <ul>
            <li><strong>Find nearby food banks</strong> when you search for donation locations</li>
            <li><strong>Provide distance calculations</strong> for food bank listings</li>
            </ul>
            <p><strong>Important:</strong> Location data is only collected when you actively use the food bank finder feature and is not stored permanently.</p>

            <h3>Device and Usage Information</h3>
            <p>We automatically collect:</p>
            <ul>
            <li><strong>Device type and operating system</strong> (for app compatibility)</li>
            <li><strong>App usage analytics</strong> (via Supabase Analytics - crash reports, performance data)</li>
            <li><strong>Push notification tokens</strong> (to send expiration alerts)</li>
            </ul>

            <h3>What We Don't Collect</h3>
            <p>We do <strong>NOT</strong> collect:</p>
            <ul>
            <li>Browsing history outside our app</li>
            <li>Cookies for advertising</li>
            <li>Social media data</li>
            <li>Payment information (our app is currently free)</li>
            <li>Camera or photo data</li>
            <li>Contacts or calendar information</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ol>
            <li><strong>Provide core app functionality</strong> (food tracking, meal planning)</li>
            <li><strong>Send food expiration notifications</strong> (only if you enable them)</li>
            <li><strong>Improve app performance</strong> and fix bugs</li>
            <li><strong>Provide customer support</strong> when you contact us</li>
            <li><strong>Ensure account security</strong> and prevent fraud</li>
            <li><strong>Comply with legal obligations</strong></li>
            </ol>
            <p>We do <strong>NOT</strong> use your information for:</p>
            <ul>
            <li>Marketing emails or promotional content</li>
            <li>Selling to third parties</li>
            <li>Advertising purposes</li>
            <li>Social media integration</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Data Storage and Security</h2>

            <h3>Where Your Data is Stored</h3>
            <p>Your data is securely stored using <strong>Supabase</strong>, a trusted backend service provider:</p>
            <ul>
            <li><strong>Servers located:</strong> United States (AWS infrastructure)</li>
            <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
            <li><strong>Access controls:</strong> Only authenticated users can access their own data</li>
            </ul>

            <h3>Security Measures</h3>
            <p>We implement industry-standard security practices:</p>
            <ul>
            <li><strong>Authentication:</strong> Secure email/password authentication</li>
            <li><strong>Session management:</strong> Automatic session timeouts and refresh</li>
            <li><strong>Data validation:</strong> Input sanitization and validation</li>
            <li><strong>Monitoring:</strong> Real-time security monitoring</li>
            </ul>
    
            <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
            <p>We use the following third-party services:</p>

            <h3>Supabase (Backend Services)</h3>
            <ul>
            <li><strong>Purpose:</strong> Authentication, database, and real-time features</li>
            <li><strong>Data shared:</strong> Account information, food inventory, meal plans</li>
            <li><strong>Privacy Policy:</strong> <a href="https://supabase.com/privacy">https://supabase.com/privacy</a></li>
            </ul>

            <h3>Spoonacular (Recipe API)</h3>
            <ul>
            <li><strong>Purpose:</strong> Recipe recommendations and meal suggestions based on your food inventory</li>
            <li><strong>Data shared:</strong> Your food ingredients (to find matching recipes)</li>
            <li><strong>Privacy Policy:</strong> <a href="https://spoonacular.com/food-api/privacy-policy">https://spoonacular.com/food-api/privacy-policy</a></li>
            </ul>

            <h3>OpenStreetMap (Food Bank Locations)</h3>
            <ul>
            <li><strong>Purpose:</strong> Finding nearby food banks for donations</li>
            <li><strong>Data shared:</strong> Your location (temporarily, when you search)</li>
            <li><strong>Privacy Policy:</strong> <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy">https://wiki.osmfoundation.org/wiki/Privacy_Policy</a></li>
            </ul>

            <h3>Expo Platform (App Infrastructure)</h3>
            <ul>
            <li><strong>Purpose:</strong> App delivery, push notifications, crash reporting</li>
            <li><strong>Data shared:</strong> Device information, crash logs, push tokens</li>
            <li><strong>Privacy Policy:</strong> <a href="https://expo.dev/privacy">https://expo.dev/privacy</a></li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Data Retention</h2>
            <p>We retain your data only as long as necessary:</p>
            <ul>
            <li><strong>Account data:</strong> Until you delete your account</li>
            <li><strong>Food inventory:</strong> Automatically cleaned up after items expire</li>
            <li><strong>Usage analytics:</strong> Up to 2 years for app improvement</li>
            <li><strong>Crash logs:</strong> Up to 90 days for debugging</li>
            </ul>
            <p>You can delete your account and all associated data at any time by contacting us.</p>

            <h2 className="text-xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <p><strong>We do NOT sell, rent, or trade your personal information to third parties.</strong></p>
            <p>We may share your information only in these limited circumstances:</p>
            <ul>
            <li><strong>With your consent</strong> for specific features you enable</li>
            <li><strong>With service providers</strong> (Supabase, Expo) to operate the app</li>
            <li><strong>For legal compliance</strong> when required by law</li>
            <li><strong>To protect safety</strong> in emergency situations</li>
            <li><strong>Business transfers</strong> (with notice if ownership changes)</li>
            </ul>
            <p>All third-party services we use have their own privacy policies and security measures.</p>

            <h2 className="text-xl font-semibold mb-4">Your Rights and Controls</h2>

            <h3>Managing Your Data</h3>
            <p>You have the right to:</p>
            <ol>
            <li><strong>Access</strong> your personal data</li>
            <li><strong>Update</strong> or correct your information</li>
            <li><strong>Delete</strong> your account and all data</li>
            <li><strong>Export</strong> your data (food inventory, meal plans)</li>
            <li><strong>Control notifications</strong> through app settings</li>
            </ol>
            <p><strong>To delete your account:</strong> Contact us at mazah.foodsavingapp@gmail.com with "Delete Account" in the subject line. We will permanently delete all your data within 30 days.</p>

            <h3>GDPR Rights (EU/EEA Users)</h3>
            <p>If you're in the European Union or European Economic Area, you also have the right to:</p>
            <ul>
            <li><strong>Data portability</strong> - receive your data in a machine-readable format</li>
            <li><strong>Restrict processing</strong> - limit how we use your data</li>
            <li><strong>Object to processing</strong> - opt out of certain data uses</li>
            <li><strong>Lodge complaints</strong> - contact your local data protection authority</li>
            </ul>

            <h3>California Privacy Rights (CCPA)</h3>
            <p>California residents have additional rights:</p>
            <ul>
            <li><strong>Right to know</strong> what personal information we collect and how it's used</li>
            <li><strong>Right to delete</strong> personal information (with some exceptions)</li>
            <li><strong>Right to opt-out</strong> of data "sales" (we don't sell data)</li>
            <li><strong>Right to non-discrimination</strong> for exercising privacy rights</li>
            </ul>

            <h3>Location Privacy</h3>
            <ul>
            <li>Location access is <strong>always optional</strong></li>
            <li>Only used for food bank finder feature</li>
            <li>Can be denied or revoked at any time</li>
            <li>Location is <strong>never stored</strong> permanently</li>
            </ul>

            <h3>Notification Controls</h3>
            <p>You can control push notifications:</p>
            <ul>
            <li>Turn off all notifications</li>
            <li>Customize expiration alert timing</li>
            <li>Disable specific notification types</li>
            </ul>

            <h3>Data Portability</h3>
            <p>You can request a copy of your data by contacting us at mazah.foodsavingapp@gmail.com</p>

            <h2 className="text-xl font-semibold mb-4">Children's Privacy</h2>
            <p>Our app is designed to be safe and appropriate for users of all ages, including children. We are committed to protecting children's privacy and comply with applicable children's privacy laws.</p>
            <p><strong>For users under 13:</strong> We encourage parental supervision and recommend that parents help younger children use the app responsibly.</p>
            <p><strong>Data collection for minors:</strong> We collect the same minimal data for all users regardless of age (email, food inventory, meal plans). We do not collect additional personal information from children.</p>
            <p><strong>Parental rights:</strong> Parents can contact us at mazah.foodsavingapp@gmail.com to:</p>
            <ul>
            <li>Review their child's data</li>
            <li>Request deletion of their child's account</li>
            <li>Ask questions about our privacy practices</li>
            </ul>
            <p>If you believe a child has provided us with personal information without parental consent, please contact us immediately.</p>

            <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
            <p>We may update this Privacy Policy to reflect:</p>
            <ul>
            <li>Changes in our data practices</li>
            <li>New features or services</li>
            <li>Legal requirements</li>
            </ul>
            <p>We will notify you of significant changes by:</p>
            <ul>
            <li>Updating the "Last Updated" date</li>
            <li>Sending an in-app notification</li>
            <li>Posting a notice in the app</li>
            </ul>
            <p>Continued use of the app after changes indicates acceptance of the updated policy.</p>

            <h2 className="text-xl font-semibold mb-4">International Users</h2>
            <p>If you are accessing our app from outside the United States:</p>
            <ul>
            <li>Your data may be transferred to and stored in the US</li>
            <li>We comply with applicable data protection laws</li>
            <li>EU/EEA residents have additional rights under GDPR</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>For questions about this Privacy Policy or your data:</p>
            <p><strong>Email:</strong> mazah.foodsavingapp@gmail.com</p>
            <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
            <p>We aim to respond to all privacy inquiries within 48 hours.</p>
            
            <p><strong>Note:</strong> This app is designed to help reduce food waste and support local communities. We are committed to protecting your privacy while delivering a meaningful service.</p>
          </section>
          
        </div>
      </div>
    </div>
  );
}