import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  { nameKey: "status.api.name", status: "operational", uptime: "99.99%" },
  { nameKey: "status.widget.name", status: "operational", uptime: "99.98%" },
  { nameKey: "status.dashboard.name", status: "operational", uptime: "99.97%" },
  { nameKey: "status.payments.name", status: "operational", uptime: "99.99%" }
];

const incidents = [
  {
    titleKey: "status.incident1.title",
    descKey: "status.incident1.desc",
    date: "2025-01-10",
    status: "resolved"
  }
];

export default function Status() {
  const { t } = useLanguage();
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "degraded":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "down":
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: string) => {
    return t(`status.${status}` as any);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                {t('status.title')}
              </h1>
            </div>
            <p className="text-lg leading-8 text-muted-foreground">
              {t('status.subtitle')}
            </p>
          </motion.div>

          {/* Services Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {t('status.currentStatus')}
            </h2>
            
            <Card className="divide-y divide-border">
              {services.map((service, index) => (
                <motion.div
                  key={service.nameKey}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="p-6 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {t(service.nameKey as any)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {getStatusText(service.status)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">
                      {service.uptime}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t('status.uptime')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </Card>
          </motion.div>

          {/* Recent Incidents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {t('status.recentIncidents')}
            </h2>
            
            {incidents.length > 0 ? (
              <div className="space-y-4">
                {incidents.map((incident, index) => (
                  <Card key={incident.titleKey} className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-foreground">
                        {t(incident.titleKey as any)}
                      </h3>
                      <span className="inline-flex px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-medium">
                        {t(`status.${incident.status}` as any)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {t(incident.descKey as any)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {incident.date}
                    </p>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <p className="text-muted-foreground">
                  {t('status.noIncidents')}
                </p>
              </Card>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
