import { Ruler, Info } from "lucide-react";

export default function SizeGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-black flex items-center gap-3">
          <Ruler className="w-8 h-8 text-primary" />
          Size Guide
        </h1>
        <p className="text-muted-foreground mt-1">
          Find your perfect fit with our comprehensive size charts
        </p>
      </div>

      {/* Men's Jerseys */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Men&apos;s Jerseys</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="text-left py-3 px-4 font-semibold">Size</th>
                <th className="text-left py-3 px-4 font-semibold">Chest (in)</th>
                <th className="text-left py-3 px-4 font-semibold">Waist (in)</th>
                <th className="text-left py-3 px-4 font-semibold">Length (in)</th>
                <th className="text-left py-3 px-4 font-semibold">EU Size</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-3 px-4 font-medium">XS</td><td className="py-3 px-4">30-33</td><td className="py-3 px-4">25-28</td><td className="py-3 px-4">26</td><td className="py-3 px-4">42-44</td></tr>
              <tr className="border-b border-border bg-muted/50"><td className="py-3 px-4 font-medium">S</td><td className="py-3 px-4">34-37</td><td className="py-3 px-4">28-31</td><td className="py-3 px-4">27</td><td className="py-3 px-4">44-46</td></tr>
              <tr className="border-b border-border"><td className="py-3 px-4 font-medium">M</td><td className="py-3 px-4">37-41</td><td className="py-3 px-4">31-35</td><td className="py-3 px-4">28</td><td className="py-3 px-4">46-48</td></tr>
              <tr className="border-b border-border bg-muted/50"><td className="py-3 px-4 font-medium">L</td><td className="py-3 px-4">41-44</td><td className="py-3 px-4">35-39</td><td className="py-3 px-4">29</td><td className="py-3 px-4">48-50</td></tr>
              <tr className="border-b border-border"><td className="py-3 px-4 font-medium">XL</td><td className="py-3 px-4">44-48</td><td className="py-3 px-4">39-43</td><td className="py-3 px-4">30</td><td className="py-3 px-4">50-52</td></tr>
              <tr><td className="py-3 px-4 font-medium">XXL</td><td className="py-3 px-4">48-53</td><td className="py-3 px-4">43-47</td><td className="py-3 px-4">31</td><td className="py-3 px-4">52-54</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Women's Jerseys */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Women&apos;s Jerseys</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="text-left py-3 px-4 font-semibold">Size</th>
                <th className="text-left py-3 px-4 font-semibold">Chest (in)</th>
                <th className="text-left py-3 px-4 font-semibold">Waist (in)</th>
                <th className="text-left py-3 px-4 font-semibold">Hip (in)</th>
                <th className="text-left py-3 px-4 font-semibold">Length (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-3 px-4 font-medium">XS</td><td className="py-3 px-4">30-32</td><td className="py-3 px-4">24-26</td><td className="py-3 px-4">33-35</td><td className="py-3 px-4">24</td></tr>
              <tr className="border-b border-border bg-muted/50"><td className="py-3 px-4 font-medium">S</td><td className="py-3 px-4">32-34</td><td className="py-3 px-4">26-28</td><td className="py-3 px-4">35-37</td><td className="py-3 px-4">25</td></tr>
              <tr className="border-b border-border"><td className="py-3 px-4 font-medium">M</td><td className="py-3 px-4">35-37</td><td className="py-3 px-4">29-31</td><td className="py-3 px-4">38-40</td><td className="py-3 px-4">26</td></tr>
              <tr className="border-b border-border bg-muted/50"><td className="py-3 px-4 font-medium">L</td><td className="py-3 px-4">38-40</td><td className="py-3 px-4">32-34</td><td className="py-3 px-4">41-43</td><td className="py-3 px-4">27</td></tr>
              <tr><td className="py-3 px-4 font-medium">XL</td><td className="py-3 px-4">41-43</td><td className="py-3 px-4">35-37</td><td className="py-3 px-4">44-46</td><td className="py-3 px-4">28</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footwear */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Soccer Cleats & Shoes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="text-left py-3 px-4 font-semibold">US</th>
                <th className="text-left py-3 px-4 font-semibold">UK</th>
                <th className="text-left py-3 px-4 font-semibold">EU</th>
                <th className="text-left py-3 px-4 font-semibold">CM</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-3 px-4 font-medium">7</td><td className="py-3 px-4">6.5</td><td className="py-3 px-4">40</td><td className="py-3 px-4">25</td></tr>
              <tr className="border-b border-border bg-muted/50"><td className="py-3 px-4 font-medium">8</td><td className="py-3 px-4">7.5</td><td className="py-3 px-4">41</td><td className="py-3 px-4">26</td></tr>
              <tr className="border-b border-border"><td className="py-3 px-4 font-medium">9</td><td className="py-3 px-4">8.5</td><td className="py-3 px-4">42.5</td><td className="py-3 px-4">27</td></tr>
              <tr className="border-b border-border bg-muted/50"><td className="py-3 px-4 font-medium">10</td><td className="py-3 px-4">9.5</td><td className="py-3 px-4">44</td><td className="py-3 px-4">28</td></tr>
              <tr className="border-b border-border"><td className="py-3 px-4 font-medium">11</td><td className="py-3 px-4">10.5</td><td className="py-3 px-4">45</td><td className="py-3 px-4">29</td></tr>
              <tr><td className="py-3 px-4 font-medium">12</td><td className="py-3 px-4">11.5</td><td className="py-3 px-4">46</td><td className="py-3 px-4">30</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Authentic vs Replica */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Authentic vs Replica Jerseys</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-muted rounded-xl p-6">
            <h3 className="font-bold mb-3">Authentic</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>- Slim, athletic fit (same as players wear)</li>
              <li>- Lighter, more breathable fabric</li>
              <li>- Advanced moisture-wicking technology</li>
              <li>- Heat-applied logos and details</li>
              <li>- Higher price point</li>
            </ul>
          </div>
          <div className="bg-muted rounded-xl p-6">
            <h3 className="font-bold mb-3">Replica</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>- Relaxed, comfortable fit for everyday wear</li>
              <li>- Standard breathable fabric</li>
              <li>- Standard moisture-wicking technology</li>
              <li>- Screen-printed logos and details</li>
              <li>- More affordable price point</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold mb-2">Fitting Tips</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Measure your chest at the fullest point for the most accurate fit.</li>
              <li>If you&apos;re between sizes, we recommend sizing up for a comfortable fit.</li>
              <li>Authentic jerseys fit tighter than replica jerseys - consider sizing up.</li>
              <li>For a looser, casual fit, order one size larger than your measurement suggests.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
