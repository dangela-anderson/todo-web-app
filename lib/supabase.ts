export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Tasks: {
        Row: {
          description: string | null
          id: string
          status: Database["public"]["Enums"]["Status"]
          title: string
          userId: string
        }
        Insert: {
          description?: string | null
          id: string
          status: Database["public"]["Enums"]["Status"]
          title: string
          userId: string
        }
        Update: {
          description?: string | null
          id?: string
          status?: Database["public"]["Enums"]["Status"]
          title?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Tasks_userId_fkey"
            columns: ["userId"]
            referencedRelation: "Users"
            referencedColumns: ["id"]
          }
        ]
      }
      Users: {
        Row: {
          firstName: string
          id: string
          lastName: string
        }
        Insert: {
          firstName: string
          id: string
          lastName: string
        }
        Update: {
          firstName?: string
          id?: string
          lastName?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Status: "ACTIVE" | "COMPLETE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
