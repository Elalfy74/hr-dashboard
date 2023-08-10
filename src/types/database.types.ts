export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      departments: {
        Row: {
          created_at: string;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      employees: {
        Row: {
          active: boolean;
          avatar: string | null;
          created_at: string;
          date_of_joining: string;
          department: number;
          designation: string;
          email: string;
          experience_years: number;
          first_name: string;
          id: number;
          last_name: string;
          phone: string | null;
          salary: number;
        };
        Insert: {
          active?: boolean;
          avatar?: string | null;
          created_at?: string;
          date_of_joining: string;
          department: number;
          designation: string;
          email: string;
          experience_years?: number;
          first_name: string;
          id?: number;
          last_name: string;
          phone?: string | null;
          salary: number;
        };
        Update: {
          active?: boolean;
          avatar?: string | null;
          created_at?: string;
          date_of_joining?: string;
          department?: number;
          designation?: string;
          email?: string;
          experience_years?: number;
          first_name?: string;
          id?: number;
          last_name?: string;
          phone?: string | null;
          salary?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'employees_department_fkey';
            columns: ['department'];
            referencedRelation: 'departments';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
