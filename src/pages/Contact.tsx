import { Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:info@lyvena.xyz" className="text-primary hover:underline">
                info@lyvena.xyz
              </a>
            </div>
            <p className="text-gray-600">
              We\'re here to help with any questions about our grant writing services.
              Feel free to reach out to us!
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Contact;