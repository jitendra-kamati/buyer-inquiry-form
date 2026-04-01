import InquiryForm from "@/components/InquiryForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-16 pb-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
          Impact Sourcing
        </h1>
        <p className="mt-3 text-lg md:text-xl font-medium text-foreground">
          Your Trusted Garment Buying House in India
        </p>
        <p className="mt-2 max-w-xl mx-auto text-sm text-muted-foreground leading-relaxed">
          We help global brands source high-quality apparel and textiles with
          reliability and transparency.
        </p>
      </header>

      {/* Form */}
      <main className="px-4 pb-20">
        <InquiryForm />
      </main>
    </div>
  );
};

export default Index;
