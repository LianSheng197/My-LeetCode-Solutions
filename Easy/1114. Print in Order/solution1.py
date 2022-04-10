import threading

class Foo:
    def __init__(self):
        self.lock1 = threading.Lock()
        self.lock2 = threading.Lock()

        self.lock1.acquire(blocking=True)
        self.lock2.acquire(blocking=True)

    def first(self, printFirst: 'Callable[[], None]') -> None:
        printFirst()
        self.lock1.release()

    def second(self, printSecond: 'Callable[[], None]') -> None:
        self.lock1.acquire()
        printSecond()
        self.lock2.release()

    def third(self, printThird: 'Callable[[], None]') -> None:
        self.lock2.acquire()
        printThird()



# --------------------
def p1():
    print("first", end="")

def p2():
    print("second", end="")

def p3():
    print("third")

# [1, 2, 3]
foo1 = Foo()
t11 = threading.Thread(target=foo1.second, args=(p2,))
t12 = threading.Thread(target=foo1.third, args=(p3,))
t13 = threading.Thread(target=foo1.first, args=(p1,))
t11.start()
t13.start()
t12.start()

# [1, 3, 2]
foo2 = Foo()
t21 = threading.Thread(target=foo2.second, args=(p2,))
t22 = threading.Thread(target=foo2.third, args=(p3,))
t23 = threading.Thread(target=foo2.first, args=(p1,))
t21.start()
t23.start()
t22.start()
