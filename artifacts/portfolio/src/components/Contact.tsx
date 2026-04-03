import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Phone, MapPin, CheckCircle2, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I will get back to you soon.",
      action: <CheckCircle2 className="text-green-500 w-5 h-5" />,
    });
    form.reset();
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ghazankhanadeem@gmail.com",
      link: "mailto:ghazankhanadeem@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "WhatsApp",
      value: "+92 348 906 6945",
      link: "https://wa.me/923489066945"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Ghazan Khan",
      link: "https://www.linkedin.com/in/ghazan-khan-464851199"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Swabi, KPK, Pakistan",
      link: null
    }
  ];

  return (
    <Section id="contact" title="Get In Touch" bg="muted">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          className="lg:col-span-5 space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-2xl font-bold font-serif mb-3">Contact Information</h3>
            <p className="text-muted-foreground mb-6">
              I am available for professional opportunities, research collaborations, or general inquiries.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, idx) => (
              <Card key={idx} className="bg-background border-none shadow-sm">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="text-sm font-semibold text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground">{info.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-primary text-primary-foreground border-none shadow-md mt-6">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="p-2 bg-white/20 rounded-md shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider opacity-80">AHPC Registration No</p>
                  <p className="text-sm font-bold tracking-wide">REG-20251202-03563</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border border-border/50 shadow-sm bg-background">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-muted/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" {...field} className="bg-muted/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Collaboration Inquiry" {...field} className="bg-muted/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can I help you?" 
                            className="min-h-[120px] bg-muted/50 resize-y"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full sm:w-auto" size="lg">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
