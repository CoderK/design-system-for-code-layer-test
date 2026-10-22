import { Example, ExampleWrapper } from "@/catalog/example"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"

// Static stand-in: the upstream example depends on the shadcn site's AI SDK helpers.
export default function MessageExample() {
  return (
    <ExampleWrapper>
      <Example title="Conversation">
        <MessageGroup>
          <Message align="end">
            <MessageContent>
              <Bubble>
                <BubbleContent>Can you summarize the release notes?</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble>
                <BubbleContent>The release adds a sidebar, fixes three dialog bugs, and drops support for Node 18.</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        </MessageGroup>
      </Example>
      <Example title="Header and Footer">
        <Message>
          <MessageAvatar>
            <Avatar>
              <AvatarFallback>CK</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <div className="flex flex-col gap-1">
            <MessageHeader>CoderK · 2:04 PM</MessageHeader>
            <MessageContent>
              <Bubble>
                <BubbleContent>Ship it after the review passes.</BubbleContent>
              </Bubble>
            </MessageContent>
            <MessageFooter>Edited</MessageFooter>
          </div>
        </Message>
      </Example>
    </ExampleWrapper>
  )
}
