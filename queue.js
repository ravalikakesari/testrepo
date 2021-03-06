function createQueue() {
    const queue = []
    return {
        enqueue(item) {
            queue.unshift(item)
        },
        dequeue() {
            return queue.pop()
        },
        peek() {
            return queue[queue.length - 1]
        },
        get length() {
            return queue.length
        },
        isEmpty() {
            return queue.length == 0
        }
    }
}
const q = createQueue()
//console.log(q.isEmpty())
q.enqueue("hi")
q.enqueue("hello")
q.enqueue("how are you")
console.log(q.peek())