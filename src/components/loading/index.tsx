import { h, ComponentType, FunctionalComponent } from "preact";

interface LoadingProps {
    isLoading: boolean;
}

// const WithLoading = (WrappedComponent: ComponentType<LoadingProps>): ComponentType => {
//     return class TimeProviderHOC extends Component<{}, {}> {
//         render(): ComponentChild {
//             const { isLoading } = this.props;
//             if (!isLoading) {
//                 return (<WrappedComponent {...props} />)
//             }
//             return (<p>Be Hold, fetching data may take some time :)</p>);
//         }
//     };
// };

const WithLoading = (WrappedComponent: ComponentType<LoadingProps>): FunctionalComponent<LoadingProps> => {

    const LoadingProviderHOC: FunctionalComponent<LoadingProps> = (props: LoadingProps) => {
        const { isLoading } = props;
        if (!isLoading) {
            return (<WrappedComponent {...props} />)
        }
        return (<p>Be Hold, fetching data may take some time :)</p>);

        // return <div className={style.hello}>hello</div>;
    };
    return LoadingProviderHOC;
};



export default WithLoading;