import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface Signup {
  id: string;
  email: string;
  name: string;
  company: string;
  website: string | null;
  user_type: string;
  platform: string | null;
  category: string | null;
  created_at: string;
}

const Admin = () => {
  const { user, signOut } = useAuth();
  const [signups, setSignups] = useState<Signup[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminAndFetchSignups = async () => {
      if (!user) return;

      // Check if user has admin role
      const { data: roleData, error: roleError } = await supabase
        .rpc('has_role', { _user_id: user.id, _role: 'admin' });

      if (roleError) {
        toast.error('Error checking admin status');
        setLoading(false);
        return;
      }

      setIsAdmin(roleData);

      if (!roleData) {
        toast.error('You do not have admin privileges');
        setLoading(false);
        return;
      }

      // Fetch signups if user is admin
      const { data, error } = await supabase
        .from('signups')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast.error('Error fetching signups');
      } else {
        setSignups(data || []);
      }

      setLoading(false);
    };

    checkAdminAndFetchSignups();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You do not have admin privileges</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={signOut} className="w-full">Sign Out</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage customer signups</p>
        </div>
        <Button onClick={signOut} variant="outline">Sign Out</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Signups ({signups.length})</CardTitle>
          <CardDescription>View all customer signup requests</CardDescription>
        </CardHeader>
        <CardContent>
          {signups.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No signups yet</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Platform</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {signups.map((signup) => (
                    <TableRow key={signup.id}>
                      <TableCell className="font-medium">{signup.name}</TableCell>
                      <TableCell>{signup.email}</TableCell>
                      <TableCell>{signup.company}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{signup.user_type}</Badge>
                      </TableCell>
                      <TableCell>{signup.platform || '—'}</TableCell>
                      <TableCell>{signup.category || '—'}</TableCell>
                      <TableCell>
                        {new Date(signup.created_at).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
