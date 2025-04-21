export default function ({condition, children, wrapper}) {
    return condition ? wrapper(children): children;
}