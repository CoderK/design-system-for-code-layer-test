import { Example, ExampleWrapper } from "@/catalog/example"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"

const messages = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  mine: index % 2 === 0,
  text: index % 2 === 0 ? `Question ${index / 2 + 1}` : `Answer ${(index + 1) / 2}`,
}))

// Static stand-in: the upstream example depends on the shadcn site's AI SDK helpers.
export default function MessageScrollerExample() {
  return (
    <ExampleWrapper className="lg:grid-cols-1 2xl:grid-cols-1">
      <Example title="Scrollable conversation">
        <div className="h-96 w-full rounded-lg border">
          <MessageScrollerProvider>
            <MessageScroller>
              <MessageScrollerViewport className="p-4">
                <MessageScrollerContent>
                  {messages.map((message) => (
                    <MessageScrollerItem key={message.id}>
                      <Message align={message.mine ? "end" : "start"}>
                        <MessageContent>
              <Bubble>
                <BubbleContent>{message.text}</BubbleContent>
              </Bubble>
            </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                  ))}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </MessageScrollerProvider>
        </div>
      </Example>
    </ExampleWrapper>
  )
}
