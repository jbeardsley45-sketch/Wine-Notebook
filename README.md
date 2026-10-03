# Wine Tasting Notebook — App v2

Private multi-user wine tasting app for iPad and iMac/web, built with Expo/React Native and Supabase.

## New in v2
- Bottle and label camera/photo upload
- Private per-user Supabase photo storage
- Full WSET-inspired tasting workflow
- Dynamic color palette based on wine color
- Embedded region/vineyard map screen requesting terrain view
- Searchable tasting library
- Select multiple wines and compare them with an overlaid radar graph
- Web tasting-note search for the current wine
- CSV export on iPad and web
- Same private Supabase account/data on iPad and iMac

## Privacy
Every tasting row has a `user_id`. Supabase Row Level Security enforces `auth.uid() = user_id` for reading, creating, editing, and deleting records.

Photos are stored under:

`<user-id>/<tasting-id>/...`

Storage policies only allow the authenticated user to access their own path.

## Setup
1. Create a Supabase project.
2. New project: run `supabase/schema.sql` in the Supabase SQL Editor.
3. Existing v1 database: also run `supabase/migrate_v2.sql`.
4. Enable Email authentication in Supabase.
5. Copy `.env.example` to `.env`.
6. Fill in your Supabase Project URL and anon key.
7. Install Node.js, then run:

```bash
npm install
npx expo start
```

### iPad
Install Expo Go and scan the QR code during development. For TestFlight/App Store distribution, use Expo EAS Build.

### iMac
Run:

```bash
npm run web
```

The web version uses the same account and data as the iPad app.

## Security note
Only put the Supabase anon/public key in the client app. Never put the service-role key in this project.

## Next production work
- Apple Sign In
- Password reset flow
- Offline cache/queue
- App icon, splash screen, EAS configuration
- App Store/TestFlight build configuration
- Server-managed appellation and vineyard reference database
