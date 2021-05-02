/*

export class OpticalPodDetails extends React.Component<Component.KubeObjectDetailsProps<K8sApi.Pod>> {
  render() {
    return (
      <div>
        <Component.DrawerTitle title="Hello" />
        <Component.DrawerItem name="Message">
          Hello { this.props.object.getName() }!
        </Component.DrawerItem>
      </div>
    )
  }
}

export default class OpticalExtension extends LensRendererExtension {
  clusterPages = [
    {
      id: "hello", // hello-world:foo
      components: {
        Page: () => <OpticalPage extension={this}/>,
      }
    }
  ]

  clusterPageMenus = [
    {
      target: { pageId: "hello" },
      title: "Hello World",
      components: {
        Icon: OpticalIcon,
      }
    }
  ]

  kubeObjectDetailItems = [
    {
      kind: "Pod",
      apiVersions: ["v1"],
      priority: 10,
      components: {
        Details: (props: Component.KubeObjectDetailsProps<K8sApi.Pod>) => <OpticalPodDetails {...props} />
      }
    }
  ]

  async onActivate() {
    console.log("hello world")
  }
}

*/