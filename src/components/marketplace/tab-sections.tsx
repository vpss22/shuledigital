"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  BookOpen,
  Clock,
  Headset,
  LifeBuoy,
  Mail,
  Star,
  ThumbsUp,
} from "lucide-react";
import { changelogs, commentsData, faqs, reviewsData } from "@/lib/product-data";
import { cn } from "@/lib/utils";

/* ---------------------------------- FAQs ---------------------------------- */

export function FaqsSection() {
  return (
    <section aria-labelledby="faqs-heading">
      <h2 id="faqs-heading" className="text-2xl font-extrabold tracking-tight text-slate-900">
        Frequently Asked Questions
      </h2>
      <p className="mt-2 text-slate-600">
        Quick answers to the questions buyers ask most before purchasing.
      </p>
      <Accordion type="single" collapsible className="mt-6 rounded-xl border border-slate-200 bg-white px-5 shadow-sm">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-[15px] font-semibold text-slate-800 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed text-slate-600">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

/* --------------------------------- Reviews --------------------------------- */

export function ReviewsSection() {
  return (
    <section aria-labelledby="reviews-heading">
      <h2 id="reviews-heading" className="text-2xl font-extrabold tracking-tight text-slate-900">
        Buyer Reviews
      </h2>
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <span className="text-4xl font-black text-amber-600">5.0</span>
        <div>
          <div className="flex" aria-label="Rated 5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" aria-hidden="true" />
            ))}
          </div>
          <p className="mt-0.5 text-sm text-amber-700">Based on 1 verified purchase review</p>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {reviewsData.map((review) => (
          <article
            key={review.name}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {review.initials}
              </span>
              <div>
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="flex" aria-hidden="true">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </span>
                  {review.date}
                </p>
              </div>
              <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                <ThumbsUp className="h-3 w-3" aria-hidden="true" /> Verified Purchase
              </span>
            </div>
            <p className="mt-3 leading-relaxed text-slate-600">{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- Comments -------------------------------- */

export function CommentsSection() {
  return (
    <section aria-labelledby="comments-heading">
      <h2 id="comments-heading" className="text-2xl font-extrabold tracking-tight text-slate-900">
        Item Comments
      </h2>
      <p className="mt-2 text-slate-600">Questions and answers from the buyer community.</p>

      <div className="mt-5 space-y-4">
        {commentsData.map((comment) => (
          <article
            key={comment.name}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">
                {comment.initials}
              </span>
              <p className="font-bold text-slate-900">{comment.name}</p>
              <p className="text-xs text-slate-400">{comment.date}</p>
            </div>
            <p className="mt-2.5 text-slate-600">{comment.text}</p>

            {comment.reply && (
              <div className="mt-4 rounded-lg bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                    {comment.reply.initials}
                  </span>
                  <p className="text-sm font-bold text-slate-900">{comment.reply.name}</p>
                  <p className="text-xs text-slate-400">{comment.reply.date}</p>
                  <span className="ml-auto rounded bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-600">
                    AUTHOR
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{comment.reply.text}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- Suggestion ------------------------------- */

export function SuggestionSection() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast({
        title: "Suggestion is empty",
        description: "Please write your feature idea before submitting.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Suggestion submitted 🎉",
      description: "Thanks for helping shape the roadmap — we review every idea.",
    });
    setEmail("");
    setMessage("");
  };

  return (
    <section aria-labelledby="suggestion-heading">
      <h2 id="suggestion-heading" className="text-2xl font-extrabold tracking-tight text-slate-900">
        Suggest a Feature
      </h2>
      <p className="mt-2 text-slate-600">
        Have an idea that would make Shule-Digital even better? Tell us and it goes straight to
        the product team.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-5 max-w-xl space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div className="space-y-2">
          <Label htmlFor="suggestion-email">Email (optional)</Label>
          <Input
            id="suggestion-email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="suggestion-message">Your suggestion</Label>
          <Textarea
            id="suggestion-message"
            placeholder="Describe the feature or improvement you'd like to see..."
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          Submit Suggestion
        </Button>
      </form>
    </section>
  );
}

/* --------------------------------- Support --------------------------------- */

export function SupportSection() {
  const cards = [
    {
      icon: LifeBuoy,
      title: "6 Months Basic Support",
      text: "Every license includes six months of guidance-based support covering setup questions and bug reports.",
    },
    {
      icon: Headset,
      title: "Dedicated Support (Extended)",
      text: "Extended license buyers get a dedicated engineer, priority replies, and hands-on deployment help.",
    },
    {
      icon: BookOpen,
      title: "Online Documentation",
      text: "Step-by-step docs cover installation, configuration, app building, and store publishing.",
    },
    {
      icon: Clock,
      title: "Response Time",
      text: "Most tickets receive a first response within one business day, Monday through Saturday.",
    },
  ];

  return (
    <section aria-labelledby="support-heading">
      <h2 id="support-heading" className="text-2xl font-extrabold tracking-tight text-slate-900">
        Support
      </h2>
      <p className="mt-2 text-slate-600">
        We stand behind the product with documentation, ticketing, and real engineers.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <card.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="font-bold text-slate-900">{card.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{card.text}</p>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        Raise a Support Ticket
      </a>
    </section>
  );
}

/* -------------------------------- Change logs ------------------------------ */

export function ChangelogsSection() {
  return (
    <section aria-labelledby="changelog-heading">
      <h2 id="changelog-heading" className="text-2xl font-extrabold tracking-tight text-slate-900">
        Change Logs
      </h2>
      <p className="mt-2 text-slate-600">Every update shipped to the platform, newest first.</p>

      <ol className="relative mt-6 space-y-6 border-l-2 border-slate-100 pl-6">
        {changelogs.map((log) => (
          <li key={log.version} className="relative">
            <span
              className={cn(
                "absolute -left-[31px] top-1 flex h-3.5 w-3.5 rounded-full ring-4 ring-white",
                log.tag === "Latest" ? "bg-blue-600" : "bg-slate-300"
              )}
              aria-hidden="true"
            />
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-bold text-slate-900">{log.version}</h3>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-xs font-bold",
                    log.tag === "Latest"
                      ? "bg-blue-50 text-blue-600"
                      : log.tag === "Major"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-slate-100 text-slate-500"
                  )}
                >
                  {log.tag}
                </span>
                <span className="text-xs text-slate-400">{log.date}</span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {log.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
