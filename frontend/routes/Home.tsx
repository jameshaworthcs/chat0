import Chat from "@/frontend/components/Chat";
import { v4 as uuidv4 } from "uuid";
import { useAPIKeyStore } from "../stores/APIKeyStore";
import { useModelStore } from "../stores/ModelStore";
import Landing from "../components/ui/landing";

export default function Home() {
  const hasRequiredKeys = useAPIKeyStore((state) => state.hasRequiredKeys());

  const isAPIKeysHydrated = useAPIKeyStore.persist?.hasHydrated();
  const isModelStoreHydrated = useModelStore.persist?.hasHydrated();

  if (!isAPIKeysHydrated || !isModelStoreHydrated) return null;

  if (!hasRequiredKeys)
    return (
      <div className="flex flex-col items-center justify-center w-full h-full max-w-sm md:max-w-3xl py-20 mx-auto">
        <Landing />
      </div>
    );

  return <Chat threadId={uuidv4()} initialMessages={[]} />;
}
