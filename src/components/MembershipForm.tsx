import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const MembershipForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-membership-email", {
        body: {
          name: form.name.trim(),
          address: form.address.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        },
      });

      if (error) throw error;

      toast({ title: "Application submitted successfully! 🎉" });
      setForm({ name: "", address: "", phone: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif-display italic font-bold text-3xl lg:text-4xl text-foreground">
            Become a Member
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Join the Shakti Mart family. Fill in your details and we'll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              className="mt-1.5"
              maxLength={100}
            />
          </div>

          <div>
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              name="address"
              placeholder="Your address"
              value={form.address}
              onChange={handleChange}
              className="mt-1.5"
              maxLength={200}
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="98XXXXXXXX"
              value={form.phone}
              onChange={handleChange}
              className="mt-1.5"
              maxLength={15}
            />
          </div>

          <div>
            <Label htmlFor="message">Message (optional)</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Anything you'd like to tell us..."
              value={form.message}
              onChange={handleChange}
              className="mt-1.5"
              maxLength={500}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full rounded-full"
            size="lg"
          >
            {loading ? "Submitting..." : "Become a Member →"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default MembershipForm;
