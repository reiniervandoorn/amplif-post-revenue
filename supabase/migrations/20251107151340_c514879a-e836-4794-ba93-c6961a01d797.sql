-- Drop the existing unrestricted public signup policy
DROP POLICY IF EXISTS "Allow public signup insertions" ON public.signups;

-- Create a new policy with server-side validation
CREATE POLICY "Allow public signup insertions with validation"
ON public.signups
FOR INSERT
WITH CHECK (
  -- Email validation: must be valid format and reasonable length
  email IS NOT NULL
  AND email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND length(email) <= 255
  
  -- Name validation: required and length limit
  AND name IS NOT NULL
  AND length(trim(name)) > 0
  AND length(name) <= 100
  
  -- User type validation: required
  AND user_type IS NOT NULL
  AND length(trim(user_type)) > 0
  
  -- Company validation: required and length limit
  AND company IS NOT NULL
  AND length(trim(company)) > 0
  AND length(company) <= 200
  
  -- Website validation: optional but length limit when provided
  AND (website IS NULL OR length(website) <= 500)
  
  -- Platform validation: optional but length limit when provided
  AND (platform IS NULL OR length(platform) <= 100)
  
  -- Category validation: optional but length limit when provided
  AND (category IS NULL OR length(category) <= 100)
);