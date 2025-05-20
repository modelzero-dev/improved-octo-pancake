
+import random
+
+
+def main():
+    # Print a welcome message.
+    print("Willkommen zum Zahlenratespiel!")
+    print("Ich denke mir eine Zahl zwischen 1 und 100.")
+
+    # Generate a random number between 1 and 100.
+    number = random.randint(1, 100)
+
+    # We'll count how many guesses the player takes.
+    attempts = 0
+
+    while True:
+        # Ask the player for a guess.
+        guess_input = input("Bitte gib deine Vermutung ein: ")
+
+        # Convert the input into an integer.
+        # If the input is not a number, show an error and continue.
+        try:
+            guess = int(guess_input)
+        except ValueError:
+            print("Bitte eine gültige Zahl eingeben!")
+            continue
+
+        # Increase the number of attempts.
+        attempts += 1
+
+        # Check if the guess is correct.
+        if guess < number:
+            print("Zu niedrig!")
+        elif guess > number:
+            print("Zu hoch!")
+        else:
+            # The player guessed the correct number. Show how many attempts it took
+            # and wait for the user to press Enter so the window doesn't close
+            # immediately when started with a double-click.
+            print(f"Richtig! Du hast die Zahl in {attempts} Versuchen erraten.")
+            input("Drücke Enter, um das Programm zu beenden.")
+            break
+
+
+if __name__ == "__main__":
+    main()
