"use client";

interface JerseyCustomizerProps {
  customName: string;
  customNumber: string;
  onNameChange: (name: string) => void;
  onNumberChange: (number: string) => void;
}

export default function JerseyCustomizer({
  customName,
  customNumber,
  onNameChange,
  onNumberChange,
}: JerseyCustomizerProps) {
  return (
    <div className="border border-border rounded-xl p-4">
      <h3 className="text-sm font-semibold mb-3">Customize Your Jersey (Optional)</h3>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-muted-foreground font-medium block mb-1">Name on Back</label>
          <input
            type="text"
            value={customName}
            onChange={(e) => onNameChange(e.target.value.toUpperCase())}
            placeholder="e.g. MESSI"
            maxLength={15}
            className="w-full px-3 py-2 text-sm border border-border rounded-lg outline-none focus:border-primary transition-colors uppercase"
          />
        </div>
        <div>
          <label className="text-xs text-muted-foreground font-medium block mb-1">Number</label>
          <input
            type="text"
            value={customNumber}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "").slice(0, 2);
              onNumberChange(val);
            }}
            placeholder="e.g. 10"
            maxLength={2}
            className="w-full px-3 py-2 text-sm border border-border rounded-lg outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>
      {(customName || customNumber) && (
        <div className="mt-3 bg-muted rounded-lg p-3 text-center">
          <p className="text-xs text-muted-foreground mb-1">Preview</p>
          <p className="text-2xl font-black">
            {customName || "NAME"} <span className="text-primary">{customNumber || "#"}</span>
          </p>
        </div>
      )}
    </div>
  );
}
