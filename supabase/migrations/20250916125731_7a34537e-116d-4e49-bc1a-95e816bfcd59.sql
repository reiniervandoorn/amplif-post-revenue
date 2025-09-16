-- Create a table for storing sign-up form submissions
CREATE TABLE public.signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  website TEXT,
  user_type TEXT NOT NULL CHECK (user_type IN ('merchant', 'partner')),
  platform TEXT,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for sign-up form)
CREATE POLICY "Allow public signup insertions" 
ON public.signups 
FOR INSERT 
WITH CHECK (true);

-- Create policy to restrict viewing to admin only (for future admin panel)
CREATE POLICY "Admin can view all signups" 
ON public.signups 
FOR SELECT 
USING (false); -- For now, no one can read (will be updated when admin auth is added)

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_signups_updated_at
    BEFORE UPDATE ON public.signups
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for email lookups
CREATE INDEX idx_signups_email ON public.signups(email);
CREATE INDEX idx_signups_user_type ON public.signups(user_type);
CREATE INDEX idx_signups_created_at ON public.signups(created_at DESC);