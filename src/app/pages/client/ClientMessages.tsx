import { PageLayout } from '../../components/layout/PageLayout';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Textarea } from '../../components/ui/textarea';
import { Send, Paperclip, Search } from 'lucide-react';
import { useState } from 'react';

interface Conversation {
  id: string;
  name: string;
  role: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

const conversations: Conversation[] = [
  { id: '1', name: 'Project Manager', role: 'Team Lead', lastMessage: 'The latest mockups are ready', timestamp: '10:30 AM', unread: 2 },
  { id: '2', name: 'Development Team', role: 'Developers', lastMessage: 'Integration completed', timestamp: 'Yesterday', unread: 0 },
  { id: '3', name: 'Support Team', role: 'Support', lastMessage: 'How can we help?', timestamp: 'Feb 12', unread: 0 },
];

const messages = [
  { id: '1', sender: 'Project Manager', message: 'Hi! How are you doing with the project?', timestamp: '10:15 AM', isOwn: false },
  { id: '2', sender: 'You', message: 'Everything is going well. Looking forward to the next update.', timestamp: '10:20 AM', isOwn: true },
  { id: '3', sender: 'Project Manager', message: 'Great! The latest mockups are ready for your review. I\'ve attached them here.', timestamp: '10:30 AM', isOwn: false, hasAttachment: true },
];

export function ClientMessages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  return (
    <PageLayout
      role="client"
      title="Messages"
      subtitle="Communicate with your project team"
    >
      <Card className="overflow-hidden h-[calc(100vh-13rem)]">
        <div className="grid grid-cols-12 h-full">
          {/* Conversations List */}
          <div className="col-span-4 border-r border-border flex flex-col">
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10 bg-secondary border-0"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`w-full p-4 border-b border-border text-left hover:bg-secondary/50 transition-colors ${
                    selectedConversation.id === conversation.id ? 'bg-secondary' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-sm">{conversation.name}</h4>
                    <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground truncate pr-2">
                      {conversation.lastMessage}
                    </p>
                    {conversation.unread > 0 && (
                      <Badge className="bg-accent text-white h-5 w-5 flex items-center justify-center p-0 text-xs">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-8 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-border">
              <h3 className="text-base">{selectedConversation.name}</h3>
              <p className="text-xs text-muted-foreground">{selectedConversation.role}</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-md ${message.isOwn ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`rounded-lg p-3 ${
                        message.isOwn
                          ? 'bg-accent text-white'
                          : 'bg-secondary text-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                      {message.hasAttachment && (
                        <div className="mt-2 p-2 bg-black/20 rounded flex items-center gap-2">
                          <Paperclip className="w-4 h-4" />
                          <span className="text-xs">mockups_v2.pdf</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 px-1">
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-end gap-2">
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Textarea
                  placeholder="Type your message..."
                  className="min-h-[40px] max-h-32 resize-none bg-secondary border-0"
                  rows={1}
                />
                <Button size="icon" className="h-10 w-10 bg-accent hover:bg-accent/90">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </PageLayout>
  );
}
