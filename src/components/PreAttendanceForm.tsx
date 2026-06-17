import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_LINK } from "@/lib/contact";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  whatsapp: z.string().min(10, "WhatsApp inválido"),
  area: z.string().min(1, "Selecione uma área"),
  description: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres"),
  bestTime: z.string().min(1, "Selecione o melhor horário"),
});

type FormValues = z.infer<typeof formSchema>;

const PreAttendanceForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      area: "",
      description: "",
      bestTime: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Prepare message for WhatsApp
      const message = `Olá! Meu nome é ${data.name}. Gostaria de agendar uma conversa sobre ${data.area}. Meu WhatsApp é ${data.whatsapp}. Detalhes: ${data.description}. Melhor horário: ${data.bestTime}.`;

      // Redirect to WhatsApp with pre-filled message
      window.open(
        `https://wa.me/5548996718382?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      // Show success message
      toast({
        title: "Sucesso!",
        description: "Você será redirecionado para o WhatsApp. Envie sua mensagem lá.",
      });

      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Erro",
        description: "Houve um problema ao processar sua solicitação.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formulario" className="py-20 md:py-28 bg-card">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
            Pré-atendimento
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Conte-nos sobre seu caso
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Preencha os dados abaixo e entraremos em contato pelo WhatsApp para agendar sua consulta inicial.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-xl p-8 border border-border"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* WhatsApp */}
              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp</FormLabel>
                    <FormControl>
                      <Input placeholder="(48) 99671-8382" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Area */}
              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Área de interesse</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma área" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Direito do Trabalho">Direito do Trabalho</SelectItem>
                        <SelectItem value="Direito Cível">Direito Cível</SelectItem>
                        <SelectItem value="Direito Previdenciário">Direito Previdenciário</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Breve descrição do caso</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Conte brevemente sobre sua situação..."
                        className="resize-none"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Best Time */}
              <FormField
                control={form.control}
                name="bestTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Melhor horário para contato</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o horário" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Manhã (08h - 12h)">Manhã (08h - 12h)</SelectItem>
                        <SelectItem value="Tarde (12h - 18h)">Tarde (12h - 18h)</SelectItem>
                        <SelectItem value="Noite (18h - 21h)">Noite (18h - 21h)</SelectItem>
                        <SelectItem value="Qualquer horário">Qualquer horário</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:opacity-90 text-primary-foreground font-semibold"
              >
                {isSubmitting ? "Enviando..." : "Enviar para WhatsApp"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Seus dados serão utilizados apenas para contato sobre sua consulta. Garantimos sigilo profissional.
              </p>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default PreAttendanceForm;
