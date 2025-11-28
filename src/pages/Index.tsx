import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">InnoTech</div>
            <div className="hidden md:flex gap-8">
              <a href="#product" className="text-gray-600 hover:text-primary transition-colors">О продукте</a>
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Возможности</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Тарифы</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button size="sm">Начать</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up leading-tight">
            Инновации, которые<br />меняют будущее
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
            Революционное решение для современного бизнеса. Простота, скорость и эффективность в одном продукте.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button size="lg" className="h-12 px-8">Попробовать бесплатно</Button>
            <Button size="lg" variant="outline" className="h-12 px-8">Узнать больше</Button>
          </div>
          <div className="mt-16">
            <img 
              src="https://cdn.poehali.dev/projects/c106f75e-1426-4b98-9dd0-052c673ffefc/files/ed1b81f5-c3ff-4448-8a83-4065563d704e.jpg" 
              alt="Innovation" 
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="product" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">О продукте</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Наше решение объединяет передовые технологии с интуитивным интерфейсом, создавая инструмент, который не просто автоматизирует процессы, но и вдохновляет на новые достижения. Мы разработали продукт, который понимает потребности современного бизнеса и адаптируется к вашим задачам.
          </p>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Ключевые возможности</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Zap', title: 'Молниеносная скорость', desc: 'Обработка данных в режиме реального времени' },
              { icon: 'Shield', title: 'Максимальная защита', desc: 'Современные стандарты безопасности' },
              { icon: 'Sparkles', title: 'Умная автоматизация', desc: 'ИИ-алгоритмы для оптимизации процессов' },
              { icon: 'Users', title: 'Командная работа', desc: 'Совместное использование в реальном времени' },
              { icon: 'BarChart', title: 'Аналитика', desc: 'Подробные отчеты и визуализация данных' },
              { icon: 'Puzzle', title: 'Интеграции', desc: 'Подключение к популярным сервисам' }
            ].map((feature, i) => (
              <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Что говорят клиенты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Анна Петрова', role: 'CEO, TechCorp', text: 'Это решение полностью изменило наш подход к работе. Эффективность выросла на 200%.' },
              { name: 'Михаил Соколов', role: 'CTO, StartupHub', text: 'Впечатляющая скорость внедрения. За неделю мы полностью перестроили процессы.' },
              { name: 'Елена Волкова', role: 'Директор, InnoGroup', text: 'Интуитивный интерфейс и мощный функционал. Команда освоила за день.' }
            ].map((testimonial, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => (
                      <Icon key={star} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Выберите тариф</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Старт', price: '990', features: ['До 10 пользователей', 'Базовая аналитика', 'Email поддержка', '10 ГБ хранилища'] },
              { name: 'Бизнес', price: '2990', features: ['До 50 пользователей', 'Расширенная аналитика', 'Приоритетная поддержка', '100 ГБ хранилища', 'API доступ'], highlight: true },
              { name: 'Корпорация', price: '9990', features: ['Неограниченно', 'Полная аналитика', 'Персональный менеджер', 'Безлимитное хранилище', 'API доступ', 'SLA 99.9%'] }
            ].map((plan, i) => (
              <Card key={i} className={`border-2 ${plan.highlight ? 'border-primary shadow-2xl scale-105' : 'border-gray-200 shadow-lg'}`}>
                <CardContent className="p-8">
                  {plan.highlight && (
                    <div className="text-primary text-sm font-semibold mb-2">ПОПУЛЯРНЫЙ</div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600"> ₽/мес</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.highlight ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">Свяжитесь с нами</h2>
          <p className="text-gray-600 text-center mb-12">Готовы начать? Напишите нам, и мы ответим в течение 24 часов.</p>
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full h-12">Отправить сообщение</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold">InnoTech</div>
            <div className="flex gap-8">
              <a href="#product" className="text-gray-400 hover:text-white transition-colors">О продукте</a>
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Возможности</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Тарифы</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</a>
            </div>
            <div className="flex gap-4">
              <Icon name="Twitter" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Linkedin" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Github" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm mt-8">
            © 2025 InnoTech. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
