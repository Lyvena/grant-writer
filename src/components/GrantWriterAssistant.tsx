import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const GrantWriterAssistant = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const { toast } = useToast();

  const generateGrantContent = async (userPrompt: string) => {
    // Simulating API call to AI service
    await new Promise(resolve => setTimeout(resolve, 2000));
    return `Here's a sample grant proposal based on your input: "${userPrompt}"

1. Executive Summary:
   [A concise overview of the project and its goals]

2. Problem Statement:
   [Detailed description of the issue being addressed]

3. Project Description:
   [Outline of the proposed solution and implementation plan]

4. Goals and Objectives:
   [Specific, measurable outcomes of the project]

5. Budget:
   [Breakdown of expected costs and allocation of funds]

6. Timeline:
   [Project milestones and expected completion dates]

7. Evaluation Plan:
   [Methods for measuring the project's success and impact]

8. Sustainability:
   [Long-term plans for the project beyond the grant period]`;
  };

  const { refetch, isFetching } = useQuery({
    queryKey: ['grantContent', prompt],
    queryFn: () => generateGrantContent(prompt),
    enabled: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      try {
        const data = await refetch();
        if (data.data) {
          setResult(data.data);
          toast({
            title: "Grant content generated",
            description: "Your grant proposal has been created successfully.",
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to generate grant content. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Input required",
        description: "Please enter a prompt before submitting.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Grant Writer Input</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="Enter details about the grant you're writing..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px]"
            />
            <Button type="submit" disabled={isFetching}>
              {isFetching ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Generate Grant Content
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Grant Content</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md">
              {result}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GrantWriterAssistant;