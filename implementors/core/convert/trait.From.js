(function() {var implementors = {
"halo2_backend":[["impl&lt;'params, E: MultiMillerLoop + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'params <a class=\"struct\" href=\"halo2_backend/poly/kzg/commitment/struct.ParamsKZG.html\" title=\"struct halo2_backend::poly::kzg::commitment::ParamsKZG\">ParamsKZG</a>&lt;E&gt;&gt; for <a class=\"struct\" href=\"halo2_backend/poly/kzg/msm/struct.DualMSM.html\" title=\"struct halo2_backend::poly::kzg::msm::DualMSM\">DualMSM</a>&lt;'params, E&gt;<span class=\"where fmt-newline\">where\n    E::G1Affine: <a class=\"trait\" href=\"halo2_backend/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_backend::arithmetic::CurveAffine\">CurveAffine</a>&lt;ScalarExt = &lt;E as Engine&gt;::Fr, CurveExt = &lt;E as Engine&gt;::G1&gt;,\n    E::G1: <a class=\"trait\" href=\"halo2_backend/arithmetic/trait.CurveExt.html\" title=\"trait halo2_backend::arithmetic::CurveExt\">CurveExt</a>&lt;AffineExt = E::G1Affine&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"halo2_backend/plonk/enum.Error.html\" title=\"enum halo2_backend::plonk::Error\">Error</a>"]],
"halo2_frontend":[["impl&lt;F: Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"halo2_frontend/plonk/circuit/expression/enum.Expression.html\" title=\"enum halo2_frontend::plonk::circuit::expression::Expression\">Expression</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/constraint_system/struct.Constraint.html\" title=\"struct halo2_frontend::plonk::circuit::constraint_system::Constraint\">Constraint</a>&lt;F&gt;&gt;"],["impl&lt;Col: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/expression/struct.Column.html\" title=\"struct halo2_frontend::plonk::circuit::expression::Column\">Column</a>&lt;<a class=\"enum\" href=\"halo2_middleware/circuit/enum.Any.html\" title=\"enum halo2_middleware::circuit::Any\">Any</a>&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(Col, <a class=\"struct\" href=\"halo2_middleware/poly/struct.Rotation.html\" title=\"struct halo2_middleware::poly::Rotation\">Rotation</a>)&gt; for <a class=\"struct\" href=\"halo2_frontend/plonk/circuit/constraint_system/struct.VirtualCell.html\" title=\"struct halo2_frontend::plonk::circuit::constraint_system::VirtualCell\">VirtualCell</a>"],["impl&lt;F: Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/circuit/struct.Value.html\" title=\"struct halo2_frontend::circuit::Value\">Value</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"halo2_frontend/circuit/struct.Value.html\" title=\"struct halo2_frontend::circuit::Value\">Value</a>&lt;<a class=\"enum\" href=\"halo2_frontend/plonk/assigned/enum.Assigned.html\" title=\"enum halo2_frontend::plonk::assigned::Assigned\">Assigned</a>&lt;F&gt;&gt;"],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"halo2_frontend/plonk/circuit/expression/enum.Expression.html\" title=\"enum halo2_frontend::plonk::circuit::expression::Expression\">Expression</a>&lt;F&gt;&gt; for <a class=\"type\" href=\"halo2_middleware/circuit/type.ExpressionMid.html\" title=\"type halo2_middleware::circuit::ExpressionMid\">ExpressionMid</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(<a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.Column.html\" title=\"struct halo2_frontend::dev::metadata::Column\">ColumnMid</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>)&gt; for <a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.VirtualCell.html\" title=\"struct halo2_frontend::dev::metadata::VirtualCell\">VirtualCell</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.Column.html\" title=\"struct halo2_frontend::dev::metadata::Column\">ColumnMid</a>&gt; for <a class=\"struct\" href=\"halo2_frontend/plonk/circuit/expression/struct.Column.html\" title=\"struct halo2_frontend::plonk::circuit::expression::Column\">Column</a>&lt;<a class=\"enum\" href=\"halo2_middleware/circuit/enum.Any.html\" title=\"enum halo2_middleware::circuit::Any\">Any</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"halo2_frontend/circuit/struct.RegionIndex.html\" title=\"struct halo2_frontend::circuit::RegionIndex\">RegionIndex</a>"],["impl&lt;F: Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"halo2_frontend/plonk/circuit/expression/enum.Expression.html\" title=\"enum halo2_frontend::plonk::circuit::expression::Expression\">Expression</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"halo2_frontend/plonk/circuit/constraint_system/struct.Constraint.html\" title=\"struct halo2_frontend::plonk::circuit::constraint_system::Constraint\">Constraint</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/struct.Fixed.html\" title=\"struct halo2_frontend::plonk::circuit::Fixed\">Fixed</a>&gt; for <a class=\"enum\" href=\"halo2_middleware/circuit/enum.Any.html\" title=\"enum halo2_middleware::circuit::Any\">Any</a>"],["impl&lt;F: Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(F, F)</a>&gt; for <a class=\"enum\" href=\"halo2_frontend/plonk/assigned/enum.Assigned.html\" title=\"enum halo2_frontend::plonk::assigned::Assigned\">Assigned</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/expression/struct.Column.html\" title=\"struct halo2_frontend::plonk::circuit::expression::Column\">Column</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/struct.Instance.html\" title=\"struct halo2_frontend::plonk::circuit::Instance\">Instance</a>&gt;&gt; for <a class=\"struct\" href=\"halo2_frontend/plonk/circuit/expression/struct.Column.html\" title=\"struct halo2_frontend::plonk::circuit::expression::Column\">Column</a>&lt;<a class=\"enum\" href=\"halo2_middleware/circuit/enum.Any.html\" title=\"enum halo2_middleware::circuit::Any\">Any</a>&gt;"],["impl&lt;F: Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"enum\" href=\"halo2_frontend/plonk/assigned/enum.Assigned.html\" title=\"enum halo2_frontend::plonk::assigned::Assigned\">Assigned</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"halo2_frontend/plonk/assigned/enum.Assigned.html\" title=\"enum halo2_frontend::plonk::assigned::Assigned\">Assigned</a>&lt;F&gt;"],["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(S, <a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.Column.html\" title=\"struct halo2_frontend::dev::metadata::Column\">ColumnMid</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>)&gt; for <a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.VirtualCell.html\" title=\"struct halo2_frontend::dev::metadata::VirtualCell\">VirtualCell</a>"],["impl&lt;F: Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;F</a>&gt; for <a class=\"enum\" href=\"halo2_frontend/plonk/assigned/enum.Assigned.html\" title=\"enum halo2_frontend::plonk::assigned::Assigned\">Assigned</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/expression/struct.Column.html\" title=\"struct halo2_frontend::plonk::circuit::expression::Column\">Column</a>&lt;<a class=\"enum\" href=\"halo2_middleware/circuit/enum.Any.html\" title=\"enum halo2_middleware::circuit::Any\">Any</a>&gt;&gt; for <a class=\"enum\" href=\"halo2_frontend/circuit/layouter/enum.RegionColumn.html\" title=\"enum halo2_frontend::circuit::layouter::RegionColumn\">RegionColumn</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/expression/struct.Column.html\" title=\"struct halo2_frontend::plonk::circuit::expression::Column\">Column</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/struct.Advice.html\" title=\"struct halo2_frontend::plonk::circuit::Advice\">Advice</a>&gt;&gt; for <a class=\"struct\" href=\"halo2_frontend/plonk/circuit/expression/struct.Column.html\" title=\"struct halo2_frontend::plonk::circuit::expression::Column\">Column</a>&lt;<a class=\"enum\" href=\"halo2_middleware/circuit/enum.Any.html\" title=\"enum halo2_middleware::circuit::Any\">Any</a>&gt;"],["impl&lt;'r, F: Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'r mut dyn <a class=\"trait\" href=\"halo2_frontend/circuit/layouter/trait.TableLayouter.html\" title=\"trait halo2_frontend::circuit::layouter::TableLayouter\">TableLayouter</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"halo2_frontend/circuit/struct.Table.html\" title=\"struct halo2_frontend::circuit::Table\">Table</a>&lt;'r, F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/expression/struct.Challenge.html\" title=\"struct halo2_frontend::plonk::circuit::expression::Challenge\">Challenge</a>&gt; for <a class=\"struct\" href=\"halo2_middleware/circuit/struct.ChallengeMid.html\" title=\"struct halo2_middleware::circuit::ChallengeMid\">ChallengeMid</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>)&gt; for <a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.Region.html\" title=\"struct halo2_frontend::dev::metadata::Region\">Region</a>"],["impl&lt;G: PrimeGroup&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/dev/cost/struct.MarginalProofSize.html\" title=\"struct halo2_frontend::dev::cost::MarginalProofSize\">MarginalProofSize</a>&lt;G&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/expression/struct.Column.html\" title=\"struct halo2_frontend::plonk::circuit::expression::Column\">Column</a>&lt;<a class=\"enum\" href=\"halo2_middleware/circuit/enum.Any.html\" title=\"enum halo2_middleware::circuit::Any\">Any</a>&gt;&gt; for <a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.Column.html\" title=\"struct halo2_frontend::dev::metadata::Column\">ColumnMid</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/struct.Advice.html\" title=\"struct halo2_frontend::plonk::circuit::Advice\">Advice</a>&gt; for <a class=\"enum\" href=\"halo2_middleware/circuit/enum.Any.html\" title=\"enum halo2_middleware::circuit::Any\">Any</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/expression/struct.Column.html\" title=\"struct halo2_frontend::plonk::circuit::expression::Column\">Column</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/struct.Fixed.html\" title=\"struct halo2_frontend::plonk::circuit::Fixed\">Fixed</a>&gt;&gt; for <a class=\"struct\" href=\"halo2_frontend/plonk/circuit/expression/struct.Column.html\" title=\"struct halo2_frontend::plonk::circuit::expression::Column\">Column</a>&lt;<a class=\"enum\" href=\"halo2_middleware/circuit/enum.Any.html\" title=\"enum halo2_middleware::circuit::Any\">Any</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/constraint_system/struct.VirtualCell.html\" title=\"struct halo2_frontend::plonk::circuit::constraint_system::VirtualCell\">VirtualCell</a>&gt; for <a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.VirtualCell.html\" title=\"struct halo2_frontend::dev::metadata::VirtualCell\">VirtualCell</a>"],["impl&lt;'r, F: Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'r mut dyn <a class=\"trait\" href=\"halo2_frontend/circuit/layouter/trait.RegionLayouter.html\" title=\"trait halo2_frontend::circuit::layouter::RegionLayouter\">RegionLayouter</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"halo2_frontend/circuit/struct.Region.html\" title=\"struct halo2_frontend::circuit::Region\">Region</a>&lt;'r, F&gt;"],["impl&lt;F: Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;F&gt; for <a class=\"enum\" href=\"halo2_frontend/plonk/assigned/enum.Assigned.html\" title=\"enum halo2_frontend::plonk::assigned::Assigned\">Assigned</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/struct.Instance.html\" title=\"struct halo2_frontend::plonk::circuit::Instance\">Instance</a>&gt; for <a class=\"enum\" href=\"halo2_middleware/circuit/enum.Any.html\" title=\"enum halo2_middleware::circuit::Any\">Any</a>"],["impl&lt;F: Field, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(S, <a class=\"enum\" href=\"halo2_frontend/plonk/circuit/expression/enum.Expression.html\" title=\"enum halo2_frontend::plonk::circuit::expression::Expression\">Expression</a>&lt;F&gt;)&gt; for <a class=\"struct\" href=\"halo2_frontend/plonk/circuit/constraint_system/struct.Constraint.html\" title=\"struct halo2_frontend::plonk::circuit::constraint_system::Constraint\">Constraint</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"halo2_frontend/circuit/struct.RegionStart.html\" title=\"struct halo2_frontend::circuit::RegionStart\">RegionStart</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;<a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.Column.html\" title=\"struct halo2_frontend::dev::metadata::Column\">ColumnMid</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.RandomState.html\" title=\"struct std::collections::hash::map::RandomState\">RandomState</a>&gt;)&gt; for <a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.Region.html\" title=\"struct halo2_frontend::dev::metadata::Region\">Region</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;<a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.Column.html\" title=\"struct halo2_frontend::dev::metadata::Column\">ColumnMid</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.RandomState.html\" title=\"struct std::collections::hash::map::RandomState\">RandomState</a>&gt;)&gt; for <a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.Region.html\" title=\"struct halo2_frontend::dev::metadata::Region\">Region</a>"],["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, S)&gt; for <a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.Gate.html\" title=\"struct halo2_frontend::dev::metadata::Gate\">Gate</a>"],["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(<a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.Gate.html\" title=\"struct halo2_frontend::dev::metadata::Gate\">Gate</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, S)&gt; for <a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.Constraint.html\" title=\"struct halo2_frontend::dev::metadata::Constraint\">Constraint</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/expression/struct.Selector.html\" title=\"struct halo2_frontend::plonk::circuit::expression::Selector\">Selector</a>&gt; for <a class=\"enum\" href=\"halo2_frontend/circuit/layouter/enum.RegionColumn.html\" title=\"enum halo2_frontend::circuit::layouter::RegionColumn\">RegionColumn</a>"],["impl&lt;F: Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/plonk/circuit/constraint_system/struct.ConstraintSystem.html\" title=\"struct halo2_frontend::plonk::circuit::constraint_system::ConstraintSystem\">ConstraintSystem</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"halo2_middleware/circuit/struct.ConstraintSystemMid.html\" title=\"struct halo2_middleware::circuit::ConstraintSystemMid\">ConstraintSystemMid</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>)&gt; for <a class=\"struct\" href=\"halo2_frontend/dev/metadata/struct.Region.html\" title=\"struct halo2_frontend::dev::metadata::Region\">Region</a>"],["impl&lt;G: PrimeGroup&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_frontend/dev/cost/struct.ProofSize.html\" title=\"struct halo2_frontend::dev::cost::ProofSize\">ProofSize</a>&lt;G&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"halo2_middleware/circuit/struct.ChallengeMid.html\" title=\"struct halo2_middleware::circuit::ChallengeMid\">ChallengeMid</a>&gt; for <a class=\"struct\" href=\"halo2_frontend/plonk/circuit/expression/struct.Challenge.html\" title=\"struct halo2_frontend::plonk::circuit::expression::Challenge\">Challenge</a>"]],
"halo2_proofs":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"halo2_proofs/plonk/enum.ErrorBack.html\" title=\"enum halo2_proofs::plonk::ErrorBack\">Error</a>&gt; for <a class=\"enum\" href=\"halo2_proofs/plonk/enum.Error.html\" title=\"enum halo2_proofs::plonk::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"halo2_proofs/plonk/enum.ErrorFront.html\" title=\"enum halo2_proofs::plonk::ErrorFront\">Error</a>&gt; for <a class=\"enum\" href=\"halo2_proofs/plonk/enum.Error.html\" title=\"enum halo2_proofs::plonk::Error\">Error</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()