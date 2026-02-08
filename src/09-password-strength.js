/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  var strength=0;

  if(typeof password !== "string")
    return "weak";

  if(password.length>=8)
  {
    strength+=1;
  }

  if(password != password.toLowerCase())
    strength+=1;

  if(password != password.toUpperCase())
    strength+=1;

  for(var i=0;i<10;i++)
  {
     if(password.includes(i))
     {
      strength+=1;
      break;
     }

  }

  var specialchar = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  for(var i=0;i<specialchar.length;i++)
  {
    if(password.includes(specialchar[i]))
    {
      strength+=1;
      break;
    }
  }

  if(strength<2)
    return "weak";

  else if(strength<4)
    return "medium";

  else if(strength<5)
    return "strong";

  else
    return "very strong"

}
