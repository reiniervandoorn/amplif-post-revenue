import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BestPractices() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "5 Best Practices for Post-Purchase Monetization",
      date: "January 10, 2025",
      readTime: "7 min read",
      intro: "Post-purchase monetization is one of the fastest-growing opportunities in e-commerce. But doing it right requires strategy. Here are five best practices that top merchants use to maximize their thank you page revenue without hurting customer experience.",
      practices: [
        {
          title: "1. Relevance is Everything",
          content: "Never show random offers. If someone just bought a TV, show them wall mounts, HDMI cables, or installation services—not kitchen accessories. Irrelevant offers don't just fail to convert; they actively damage trust. Use AI-powered matching to ensure every offer makes sense in context."
        },
        {
          title: "2. Limit Options to 3-5 Offers",
          content: "Choice paralysis is real. When presented with too many options, customers freeze and choose nothing. Research shows that 3-5 options is the sweet spot. AmplifAI automatically selects the top 3 most relevant offers based on the purchase context, preventing decision fatigue."
        },
        {
          title: "3. Make It Frictionless",
          content: "The customer just completed their purchase. Don't make them fill out another long form or create a new account. One-click additions should be the standard. The easier it is to say yes, the higher your attach rate will be."
        },
        {
          title: "4. Focus on Value, Not Just Price",
          content: "Don't compete on price alone. Installation services, extended warranties, and expert consultations add real value. Frame offers in terms of benefits—\"peace of mind,\" \"professional results,\" \"save time.\" Customers who just made a significant purchase are primed to invest in protecting or enhancing it."
        },
        {
          title: "5. Test and Optimize Continuously",
          content: "What works for electronics might not work for furniture. What converts well in winter might flop in summer. Run A/B tests on offer types, positioning, and messaging. Track your attach rates by category and partner. The best merchants treat their thank you page like any other conversion funnel—always testing, always improving."
        }
      ],
      conclusion: "Post-purchase monetization isn't about being pushy—it's about being helpful at the right moment. When done correctly, customers appreciate the recommendations, partners gain quality leads, and merchants unlock new revenue streams. Everyone wins."
    },
    nl: {
      title: "5 Best Practices voor Post-Purchase Monetisatie",
      date: "10 januari 2025",
      readTime: "7 min leestijd",
      intro: "Post-purchase monetisatie is een van de snelst groeiende kansen in e-commerce. Maar het goed doen vereist strategie. Hier zijn vijf best practices die top webshops gebruiken om hun bedankpagina-omzet te maximaliseren zonder de klantervaring te schaden.",
      practices: [
        {
          title: "1. Relevantie is Alles",
          content: "Toon nooit willekeurige aanbiedingen. Als iemand net een TV heeft gekocht, toon dan wandbeugels, HDMI-kabels of installatiediensten—geen keukenaccesoires. Irrelevante aanbiedingen converteren niet alleen niet; ze beschadigen actief het vertrouwen. Gebruik AI-gedreven matching om ervoor te zorgen dat elke aanbieding logisch is in context."
        },
        {
          title: "2. Beperk Opties tot 3-5 Aanbiedingen",
          content: "Keuzestress is echt. Wanneer klanten te veel opties krijgen, bevriezen ze en kiezen niets. Onderzoek toont aan dat 3-5 opties de sweet spot is. AmplifAI selecteert automatisch de top 3 meest relevante aanbiedingen op basis van de aankoopcontext, wat beslissingsmoeheid voorkomt."
        },
        {
          title: "3. Maak Het Wrijvingsloos",
          content: "De klant heeft net hun aankoop voltooid. Laat ze niet nog een lang formulier invullen of een nieuw account aanmaken. Toevoegingen met één klik moeten de standaard zijn. Hoe gemakkelijker het is om ja te zeggen, hoe hoger je bijkooppercentage zal zijn."
        },
        {
          title: "4. Focus op Waarde, Niet Alleen Prijs",
          content: "Concurreer niet alleen op prijs. Installatiediensten, verlengde garanties en expertconsultaties voegen echte waarde toe. Frame aanbiedingen in termen van voordelen—\"gemoedsrust,\" \"professionele resultaten,\" \"tijd besparen.\" Klanten die net een belangrijke aankoop hebben gedaan, zijn klaar om te investeren in het beschermen of verbeteren ervan."
        },
        {
          title: "5. Test en Optimaliseer Continu",
          content: "Wat werkt voor elektronica werkt misschien niet voor meubels. Wat goed converteert in de winter kan floppen in de zomer. Voer A/B-tests uit op aanbiedingstypes, positionering en messaging. Volg je bijkooppercentages per categorie en partner. De beste webshops behandelen hun bedankpagina zoals elke andere conversietrechter—altijd testen, altijd verbeteren."
        }
      ],
      conclusion: "Post-purchase monetisatie gaat niet over opdringerig zijn—het gaat over behulpzaam zijn op het juiste moment. Wanneer correct gedaan, waarderen klanten de aanbevelingen, krijgen partners kwaliteitsleads, en ontgrendelen webshops nieuwe omzetstromen. Iedereen wint."
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Back to Blog' : 'Terug naar Blog'}
            </Link>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{currentContent.date}</span>
              </div>
              <span>•</span>
              <span>{currentContent.readTime}</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              {currentContent.title}
            </h1>

            <p className="text-lg leading-8 text-muted-foreground mb-12">
              {currentContent.intro}
            </p>

            <div className="prose prose-lg max-w-none space-y-12">
              {currentContent.practices.map((practice, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      {practice.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {practice.content}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-12 p-6 bg-surface-50 rounded-2xl border-l-4 border-primary">
                <p className="text-lg text-foreground">
                  {currentContent.conclusion}
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-surface-50 rounded-3xl border border-border text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {language === 'en' ? 'Ready to implement these best practices?' : 'Klaar om deze best practices te implementeren?'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'en' 
                  ? 'AmplifAI handles all of this automatically, so you can focus on running your business.'
                  : 'AmplifAI regelt dit allemaal automatisch, zodat jij je kunt concentreren op het runnen van je bedrijf.'}
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-white">
                  {language === 'en' ? 'Get Started' : 'Begin Nu'}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
