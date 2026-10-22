import { Example, ExampleWrapper } from "@/catalog/example"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"
import { CheckIcon, FileSearchIcon, LoaderIcon, XIcon } from "lucide-react"

// Static stand-in: the upstream example depends on the shadcn site's AI SDK helpers.
export default function TraceExample() {
  return (
    <ExampleWrapper>
      <Example title="Statuses">
        <Trace>
          <TraceLine>
            <TraceIcon>
              <CheckIcon />
            </TraceIcon>
            <TraceTitle>Read package.json</TraceTitle>
            <TraceDescription>120ms</TraceDescription>
          </TraceLine>
          <TraceLine status="running">
            <TraceIcon>
              <LoaderIcon className="animate-spin" />
            </TraceIcon>
            <TraceTitle>Installing dependencies</TraceTitle>
          </TraceLine>
          <TraceLine status="error">
            <TraceIcon>
              <XIcon />
            </TraceIcon>
            <TraceTitle>Run tests</TraceTitle>
            <TraceDescription>2 failed</TraceDescription>
          </TraceLine>
          <TraceLine status="pending">
            <TraceTitle>Deploy preview</TraceTitle>
          </TraceLine>
        </Trace>
      </Example>
      <Example title="Collapsible">
        <Trace>
          <TraceCollapsible>
            <TraceCollapsibleTrigger>
              <TraceLine>
                <TraceIcon>
                  <FileSearchIcon />
                </TraceIcon>
                <TraceTitle>Searched 3 files</TraceTitle>
              </TraceLine>
            </TraceCollapsibleTrigger>
            <TraceCollapsibleContent>
              src/App.tsx, src/main.tsx, src/index.css
            </TraceCollapsibleContent>
          </TraceCollapsible>
        </Trace>
      </Example>
    </ExampleWrapper>
  )
}
