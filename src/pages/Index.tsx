import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [diceRoll, setDiceRoll] = useState<number | null>(null);
  const [character, setCharacter] = useState({
    name: "",
    level: 10,
    health: 100,
    armor: 4,
    stats: {
      strength: 15,
      dexterity: 12,
      constitution: 14,
      intelligence: 13,
      wisdom: 11,
      charisma: 10,
    },
  });

  const rollDice = (sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1;
    setDiceRoll(result);
  };

  const diceTypes = [
    { sides: 4, color: "bg-apocalypse-red" },
    { sides: 6, color: "bg-apocalypse-orange" },
    { sides: 8, color: "bg-apocalypse-yellow" },
    { sides: 10, color: "bg-apocalypse-red" },
    { sides: 12, color: "bg-apocalypse-orange" },
    { sides: 20, color: "bg-apocalypse-yellow" },
    { sides: 100, color: "bg-apocalypse-red" },
  ];

  const libraryItems = [
    { title: "Лор", icon: "BookOpen", description: "История и мифология мира" },
    {
      title: "Правила",
      icon: "Shield",
      description: "Механики и системы игры",
    },
    { title: "Бестиарий", icon: "Skull", description: "Монстры и существа" },
    {
      title: "Организации",
      icon: "Users",
      description: "Фракции и группировки",
    },
    { title: "Галерея", icon: "Image", description: "Арты и концепты" },
    { title: "Музыка", icon: "Music", description: "Саундтрек и эмбиент" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/1779f1f6-c3d8-4434-9304-5b0845b6fd23.jpg')`,
        }}
      >
        <div className="absolute inset-0 apocalypse-gradient opacity-30"></div>

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center p-6">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={32} className="text-apocalypse-yellow" />
            <h1 className="text-2xl font-bold font-['Oswald'] apocalypse-text-glow">
              EMBRACE
            </h1>
          </div>

          <div className="flex space-x-4">
            <Button
              variant="ghost"
              onClick={() => setActiveTab("home")}
              className="text-foreground hover:text-apocalypse-yellow"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab("library")}
              className="text-foreground hover:text-apocalypse-yellow"
            >
              Библиотека
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab("characters")}
              className="text-foreground hover:text-apocalypse-yellow"
            >
              Персонажи
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab("community")}
              className="text-foreground hover:text-apocalypse-yellow"
            >
              Сообщество
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab("contacts")}
              className="text-foreground hover:text-apocalypse-yellow"
            >
              Контакты
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-6xl font-bold font-['Oswald'] mb-6 apocalypse-text-glow">
            EMBRACE
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Добро пожаловать в постапокалиптический мир, где каждое решение
            может стать последним. Создавайте персонажей, изучайте лор и
            выживайте в мире после катастрофы.
          </p>
          <div className="flex space-x-4">
            <Button
              size="lg"
              className="bg-apocalypse-red hover:bg-apocalypse-red/80 apocalypse-glow"
              onClick={() => setActiveTab("characters")}
            >
              <Icon name="User" size={20} className="mr-2" />
              Создать персонажа
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-apocalypse-yellow text-apocalypse-yellow hover:bg-apocalypse-yellow hover:text-black"
              onClick={() => setActiveTab("library")}
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Изучить мир
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {activeTab === "home" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="apocalypse-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Users"
                    size={24}
                    className="mr-2 text-apocalypse-red"
                  />
                  Сообщество
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Общайтесь с другими выжившими, делитесь историями и
                  стратегиями.
                </p>
              </CardContent>
            </Card>

            <Card className="apocalypse-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="BookOpen"
                    size={24}
                    className="mr-2 text-apocalypse-orange"
                  />
                  Библиотека
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Изучайте лор мира, правила игры и встречайте новых существ.
                </p>
              </CardContent>
            </Card>

            <Card className="apocalypse-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="User"
                    size={24}
                    className="mr-2 text-apocalypse-yellow"
                  />
                  Персонажи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Создавайте и редактируйте своих персонажей для приключений.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "library" && (
          <div className="mt-8">
            <h2 className="text-4xl font-bold font-['Oswald'] mb-6 text-center apocalypse-text-glow">
              Библиотека Мира
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {libraryItems.map((item, index) => (
                <Card
                  key={index}
                  className="apocalypse-glow hover:scale-105 transition-transform cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon
                        name={item.icon as any}
                        size={24}
                        className="mr-2 text-apocalypse-red"
                      />
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Скоро будет доступно...
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "characters" && (
          <div className="mt-8">
            <h2 className="text-4xl font-bold font-['Oswald'] mb-6 text-center apocalypse-text-glow">
              Лист Персонажа
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Character Info */}
              <Card className="apocalypse-glow">
                <CardHeader>
                  <CardTitle>Основная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя персонажа</Label>
                    <Input
                      id="name"
                      value={character.name}
                      onChange={(e) =>
                        setCharacter({ ...character, name: e.target.value })
                      }
                      placeholder="Введите имя"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Уровень</Label>
                      <Badge variant="secondary" className="ml-2">
                        {character.level}
                      </Badge>
                    </div>
                    <div>
                      <Label>Здоровье</Label>
                      <Progress value={character.health} className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label>Характеристики</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="flex justify-between">
                        <span>Сила:</span>
                        <Badge>{character.stats.strength}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Ловкость:</span>
                        <Badge>{character.stats.dexterity}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Телосложение:</span>
                        <Badge>{character.stats.constitution}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Интеллект:</span>
                        <Badge>{character.stats.intelligence}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Мудрость:</span>
                        <Badge>{character.stats.wisdom}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Харизма:</span>
                        <Badge>{character.stats.charisma}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dice System */}
              <Card className="apocalypse-glow">
                <CardHeader>
                  <CardTitle>Система кубов</CardTitle>
                  <CardDescription>Бросайте кубы для проверок</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {diceTypes.map((dice) => (
                      <Button
                        key={dice.sides}
                        variant="outline"
                        size="sm"
                        className={`${dice.color} text-white hover:opacity-80`}
                        onClick={() => rollDice(dice.sides)}
                      >
                        d{dice.sides}
                      </Button>
                    ))}
                  </div>

                  {diceRoll && (
                    <div className="text-center">
                      <div className="text-4xl font-bold text-apocalypse-yellow mb-2">
                        {diceRoll}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Результат броска
                      </p>
                    </div>
                  )}

                  <div className="mt-4 space-y-2">
                    <Textarea placeholder="Заметки о персонаже..." />
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать лист
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Save" size={16} className="mr-2" />
                        Сохранить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "community" && (
          <div className="mt-8">
            <h2 className="text-4xl font-bold font-['Oswald'] mb-6 text-center apocalypse-text-glow">
              Сообщество Выживших
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="apocalypse-glow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="MessageCircle"
                      size={24}
                      className="mr-2 text-apocalypse-red"
                    />
                    Форумы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Обсуждайте стратегии, делитесь историями и находите
                    союзников.
                  </p>
                  <Button className="mt-4" variant="outline">
                    Перейти к форумам
                  </Button>
                </CardContent>
              </Card>

              <Card className="apocalypse-glow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Users"
                      size={24}
                      className="mr-2 text-apocalypse-orange"
                    />
                    Чаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Общайтесь в реальном времени с другими игроками.</p>
                  <Button className="mt-4" variant="outline">
                    Открыть чат
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "contacts" && (
          <div className="mt-8">
            <h2 className="text-4xl font-bold font-['Oswald'] mb-6 text-center apocalypse-text-glow">
              Контакты
            </h2>
            <Card className="apocalypse-glow max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Связаться с нами</CardTitle>
                <CardDescription>
                  Есть вопросы? Хотите присоединиться к разработке?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={20} className="text-apocalypse-red" />
                  <span>contact@embrace-game.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-apocalypse-orange"
                  />
                  <span>Discord: Embrace Community</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Github"
                    size={20}
                    className="text-apocalypse-yellow"
                  />
                  <span>GitHub: embrace-tabletop</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
