import { Example, ExampleWrapper } from "@/catalog/example"
import { Button } from "@/components/ui/button"
import { DirectionProvider } from "@/components/ui/direction"
import { Slider } from "@/components/ui/slider"

// shadcn ships no example for direction; this one shows the same controls in LTR and RTL.
export default function DirectionExample() {
  return (
    <ExampleWrapper>
      <Example title="Left to right">
        <DirectionProvider direction="ltr">
          <div dir="ltr" className="flex w-full flex-col gap-4">
            <Slider defaultValue={[30]} />
            <Button className="self-start">Continue</Button>
          </div>
        </DirectionProvider>
      </Example>
      <Example title="Right to left">
        <DirectionProvider direction="rtl">
          <div dir="rtl" className="flex w-full flex-col gap-4">
            <Slider defaultValue={[30]} />
            <Button className="self-start">متابعة</Button>
          </div>
        </DirectionProvider>
      </Example>
    </ExampleWrapper>
  )
}
