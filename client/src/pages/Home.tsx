/**
 * Home Page - Neural Network Aesthetic
 * 
 * Design Philosophy:
 * - Immersive hero section with neural network imagery
 * - Key statistics with glowing effects
 * - Research themes overview
 * - Call-to-action sections
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Brain, 
  Users, 
  FileText, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  Heart,
  Shield,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "17", label: "收录论文", icon: FileText },
  { value: "48-62%", label: "AI诊断准确率", icon: TrendingUp },
  { value: "81%", label: "LLM情感智力", icon: Heart },
  { value: "6,314", label: "元分析样本量", icon: Users },
];

const themes = [
  {
    icon: Brain,
    title: "AI Psychology 学科建设",
    description: "确立为独立交叉学科领域，研究人类对AI的心理反应与认知互动",
    color: "primary",
  },
  {
    icon: Heart,
    title: "心理健康诊断与治疗",
    description: "AI在精神卫生诊断、治疗与干预中的实践应用与效果评估",
    color: "secondary",
  },
  {
    icon: Sparkles,
    title: "LLM心理特征研究",
    description: "大型语言模型的人格特质、情感智力与共情模拟能力分析",
    color: "accent",
  },
  {
    icon: Shield,
    title: "伦理与安全考量",
    description: "AI应用中的隐私、公平性、透明度与问责制等伦理挑战",
    color: "primary",
  },
];

const keyFindings = [
  {
    stat: "ES=0.30",
    description: "AI聊天机器人在心理健康干预中的效应量",
    source: "JMIR 2025",
  },
  {
    stat: "r=0.905",
    description: "长期AI使用与认知疲劳的相关性",
    source: "Annals of Neurosciences 2025",
  },
  {
    stat: "38%",
    description: "AI工具使用对心理健康的方差解释率",
    source: "Scientific Reports 2025",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-neural-network.png"
            alt="Neural Network Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">
                2024-2026 最新研究综述
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-gradient">AI Psychology</span>
              <br />
              <span className="text-foreground">研究中心</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              探索人工智能与心理学的交汇点。本研究中心汇集了近一年来AI心理学领域的
              <span className="text-primary font-medium">17篇</span>
              高质量学术论文，深入分析AI如何影响人类的认知、情感与行为。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/findings">
                <Button size="lg" className="glow-cyan group">
                  探索研究发现
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/papers">
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  查看论文汇总
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card hover-lift border-border/30">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Themes Section */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              核心研究主题
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              本研究涵盖AI心理学的四大核心领域，从学科建设到临床应用，从技术特征到伦理规范
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {themes.map((theme, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card hover-lift border-border/30 h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-${theme.color}/10 flex items-center justify-center mb-4`}>
                      <theme.icon className={`w-6 h-6 text-${theme.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
                    <p className="text-muted-foreground">{theme.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Findings Preview */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-neural" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Lightbulb className="inline-block w-8 h-8 mr-2 text-accent" />
              关键发现
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              基于17篇高质量学术论文的系统性分析，以下是最具影响力的研究发现
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {keyFindings.map((finding, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card border-border/30 h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-gradient-amber mb-3">
                      {finding.stat}
                    </div>
                    <p className="text-foreground mb-2">{finding.description}</p>
                    <p className="text-xs text-muted-foreground">
                      来源: {finding.source}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/findings">
              <Button variant="outline" size="lg" className="group">
                查看完整研究发现
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src="/images/human-ai-interaction.png"
                alt="Human AI Interaction"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
            </div>
            
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  深入了解 AI 心理学
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  AI正在从工具转变为关系性伙伴，深刻影响着人类的认知、情感和社会互动。
                  探索这一新兴学科的最新研究进展。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/papers">
                    <Button size="lg" className="glow-purple bg-secondary hover:bg-secondary/90">
                      浏览论文库
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="ghost">
                      了解更多
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
