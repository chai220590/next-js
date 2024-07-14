import dynamic from "next/dynamic";
import WidgetImage from "./Widget.Image";
import WidgetTitle from "./Widget.Title";

type RenderWidgetProps = { item?: any; onChange?: any; onRemove?: any };

const WidgetHtml = dynamic(() => import("./Widget.Html"), {
  ssr: false,
});

function RenderWidget(props: RenderWidgetProps) {
  const { item } = props;
  switch (item.type) {
    case "title":
      return <WidgetTitle {...props} />;
    case "image":
      return <WidgetImage {...props} />;
    case "html":
      return <WidgetHtml {...props} />;
  }

  return <div />;
}

export default RenderWidget;